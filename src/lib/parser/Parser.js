/* eslint-disable no-multi-spaces */

import EventEmitter from 'events';

import snappy from 'snappyjs';

import {
  Class,
  Entity, EntityEvent,
  GameEvent, GameEventField, GameEventType,
} from '../entities/index.js';
import { IndexedCollection } from '../utils/index.js';

import Field, { FieldModel } from './Field.js';
import FieldType from './FieldType.js';
import Reader from './Reader.js';
import Serializer from './Serializer.js';
import StringTable, { StringTableEntry } from './StringTable.js';
import {
  CSVCMsg_FlattenedSerializer,
  EDemoCommands,
  commandToTypeMapping,
  packetToTypeMapping,
  priorityForType,
} from './defs.js';
import { fieldPatches } from './FieldPatch.js';

const MAGIC_SOURCE_1 = 'PBUFDEM\0'; // eslint-disable-line
const MAGIC_SOURCE_2 = 'PBDEMS2\0';

const TICK_RATE    = 30;
const TICK_RATE_MS = 1000.0 / TICK_RATE;

const INDEX_BITS = 14; // eslint-disable-line
const SERIAL_BITS = 17;

// Based on Dotabuff's Manta parser
// See: https://github.com/dotabuff/manta/blob/master/parser.go
class Parser extends Reader {
  constructor(buffer) {
    super(Buffer.from(buffer));

    this.buildNumber = null;
    this.classes = new IndexedCollection(Class, 'id', 'name');
    this.classBaselines = {};
    this.classIdSize = null;
    this.entityFullPacketCount = 0;
    this.entities = new IndexedCollection(Entity, 'index');
    this.gameEventTypes = new IndexedCollection(GameEventType, 'id', 'name');
    this.serializers = new IndexedCollection(Serializer, 'name');
    this.stringTables = new IndexedCollection(StringTable, 'name', 'index');

    this.emitter = new EventEmitter();
    this.tick = 0;
    this.parsing = false;
    this.synced = false;

    this.on('msg:CDemoPacket', this.onCDemoPacket.bind(this));
    this.on('msg:CDemoSignonPacket', this.onCDemoPacket.bind(this));
    this.on('msg:CDemoFullPacket', this.onCDemoFullPacket.bind(this));
    this.on('msg:CDemoSyncTick', this.onCDemoSyncTick.bind(this));
    this.on('msg:CSVCMsg_ClearAllStringTables', this.onCSVCMsg_ClearAllStringTables.bind(this));
    this.on('msg:CSVCMsg_CreateStringTable', this.onCSVCMsg_CreateStringTable.bind(this));
    this.on('msg:CSVCMsg_UpdateStringTable', this.onCSVCMsg_UpdateStringTable.bind(this));
    this.on('msg:CSVCMsg_ServerInfo', this.onCSVCMsg_ServerInfo.bind(this));
    this.on('msg:CMsgSource1LegacyGameEventList', this.onCMsgSource1LegacyGameEventList.bind(this));
    this.on('msg:CMsgSource1LegacyGameEvent', this.onCMsgSource1LegacyGameEvent.bind(this));
    this.on('msg:CDemoClassInfo', this.onCDemoClassInfo.bind(this));
    this.on('msg:CDemoSendTables', this.onCDemoSendTables.bind(this));
    this.on('msg:CSVCMsg_PacketEntities', this.onCSVCMsg_PacketEntities.bind(this));
    this.on('msg:CDemoStop', this.stop.bind(this));

    // Ensure this is a Dota 2 replay file
    const magic = this.readStringN(MAGIC_SOURCE_2.length);
    if (magic !== MAGIC_SOURCE_2) {
      throw new Error(`unexpected magic: ${magic}; expected: ${MAGIC_SOURCE_2}`);
    }

    // Skip currently unused integers
    this.skip(8);
  }

  get summary() {
    const { parsing, pos, tick } = this;
    this.pos = MAGIC_SOURCE_2.length;
    this.pos = this.readUint32LE();
    let summary;
    this.emitter.once('msg:CDemoFileInfo', (msg) => {
      summary = msg;
    });
    this.parsing = true;
    this.step();
    this.parsing = parsing;
    this.pos = pos;
    this.tick = tick;
    return summary;
  }

  get lastTick() {
    return this.summary.playbackTicks;
  }

  on(...args) {
    this.emitter.on(...args);
  }

  start() {
    this.parsing = true;
    while (!this.synced && this.parsing) {
      this.step();
    }
  }

  step() {
    this.seek(this.tick + 1);
  }

  frame() {
    this.seek(this.tick + TICK_RATE);
  }

  seek(target) {
    while (this.tick <= target && this.parsing) {
      const cmd = this.readVarUint32();
      const tick = this.readVarUint32();
      const size = this.readVarUint32();
      let data = this.readBytes(size);

      const type = cmd & ~EDemoCommands.DEM_IsCompressed;
      const compressed = (cmd & EDemoCommands.DEM_IsCompressed) === EDemoCommands.DEM_IsCompressed;
      if (compressed) {
        data = snappy.uncompress(data);
      }

      const lookup = commandToTypeMapping[type];
      if (!lookup) {
        throw new Error(`no type to handle demo command: ${type}`);
      }
      const [Type, as = Type.name] = lookup;

      this.tick = tick;

      const event = `msg:${as}`;
      const numListeners = this.emitter.listenerCount(event);
      if (!numListeners) {
        this.emitter.emit('msg:skip', as, tick);
        continue;
      }

      const struct = Type.decode(data);
      this.emitter.emit(event, struct, tick);
    }
  }

  play() {
    this.seek(Infinity);
  }

  stop() {
    this.parsing = false;
  }

  onCDemoPacket(msg) {
    const reader = new Reader(msg.data);

    const pending = [];
    while (!reader.eof) {
      const type = reader.readUBitVar();
      const size = reader.readVarUint32();
      const data = reader.readBytes(size);
      pending.push({ type, size, data });
    }

    if (pending.length > 1) {
      pending.sort(prioritizePendingMessages); // eslint-disable-line
    }

    for (const message of pending) {
      const lookup = packetToTypeMapping[message.type];
      if (!lookup) {
        continue;
      }

      const [Type, as = Type.name] = lookup;

      const event = `msg:${as}`;
      const numListeners = this.emitter.listenerCount(event);
      if (!numListeners) {
        this.emitter.emit('msg:skip', as);
        continue;
      }

      const struct = Type.decode(message.data);
      this.emitter.emit(event, struct);
    }
  }

  onCDemoFullPacket({ stringTable, packet }) {
    if (stringTable) {
      // TODO: Handle string tables
    }
    if (packet) {
      this.onCDemoPacket(packet);
    }
  }

  onCDemoSyncTick() {
    this.synced = true;
  }

  onCSVCMsg_ClearAllStringTables() {
    this.stringTables.clear();
  }

  onCSVCMsg_CreateStringTable(msg) {
    const {
      name, userDataFixedSize, userDataSize, userDataSizeBits, flags, numEntries,
    } = msg;

    const table = new StringTable(
      name,
      userDataFixedSize,
      userDataSize,
      userDataSizeBits,
      flags,
    );
    table.index = this.stringTables.size;
    this.stringTables.add(table);

    let buffer = msg.stringData;

    if (msg.dataCompressed) {
      const reader = new Reader(buffer);
      const magic = reader.readStringN(8);
      if (magic === 'LZSS') {
        throw new Error('LZSS string tables in old replays not yet supported');
      } else {
        buffer = snappy.uncompress(buffer);
      }
    }

    StringTableEntry.decode(table, buffer, numEntries);

    if (table.name === 'instancebaseline') {
      this.updateInstanceBaseline();
    }
  }

  onCSVCMsg_UpdateStringTable(msg) {
    const {
      stringData: buffer, numChangedEntries, tableId,
    } = msg;

    const table = this.stringTables.byIndex[tableId];
    if (!table) {
      throw new Error(`could not find string table: ${tableId}`);
    }

    StringTableEntry.decode(table, buffer, numChangedEntries);

    if (table.name === 'instancebaseline') {
      this.updateInstanceBaseline();
    }
  }

  onCSVCMsg_ServerInfo(msg) {
    this.classIdSize = Reader.calcBitsNeededFor(msg.maxClasses);

    const match = msg.gameDir.match(/dota_v(\d+)/);
    if (match) {
      this.buildNumber = +match[1];
    }
  }

  onCMsgSource1LegacyGameEventList(msg) {
    for (const { eventid, name, keys } of msg.descriptors) {
      const type = new GameEventType(eventid, name);
      for (const key of keys) {
        type.fields.push(
          new GameEventField(type.fields.length, key.name, key.type),
        );
      }
      this.gameEventTypes.add(type);
    }
  }

  onCMsgSource1LegacyGameEvent(msg) {
    const type = this.gameEventTypes.byId[msg.eventid];
    if (!type) {
      throw new Error(`unknown event: ${msg.eventid}`);
    }

    const event = new GameEvent(type, msg);
    this.emitter.emit('event', event);
    this.emitter.emit(`event:${type.name}`, event);
  }

  onCDemoClassInfo(msg) {
    for (const { classId, networkName } of msg.classes) {
      const cls = new Class(
        classId,
        networkName,
        this.serializers.byName[networkName],
      );
      this.classes.add(cls);
    }

    this.updateInstanceBaseline();
  }

  onCDemoSendTables(msg) {
    const reader = new Reader(msg.data);
    const buffer = reader.readBytes(reader.readVarUint32());

    const struct = CSVCMsg_FlattenedSerializer.decode(buffer);

    const patches = fieldPatches.filter((patch) => (
      patch.appliesFor(this.buildNumber)
    ));

    const fields = {};
    const fieldTypes = {};

    for (const { fieldsIndex, serializerVersion, serializerNameSym } of struct.serializers) {
      const name = struct.symbols[serializerNameSym];
      const serializer = new Serializer(name, serializerVersion);

      for (const index of fieldsIndex) {
        let field = fields[index];
        if (!field) {
          field = Field.for(struct.symbols, struct.fields[index]);

          if (this.buildNumber <= 990) {
            field.parentName = serializer.name;
          }

          const { varType } = field;
          let fieldType = fieldTypes[varType];
          if (!fieldType) {
            fieldType = FieldType.for(varType);
            fieldTypes[varType] = fieldType;
          }
          field.fieldType = fieldType;

          if (field.serializerName) {
            field.serializer = this.serializers.byName[field.serializerName];
          }

          for (const patch of patches) {
            patch.apply(field);
          }

          if (field.serializer) {
            if (field.isPointerType) {
              field.model = FieldModel.FIXED_TABLE;
            } else {
              field.model = FieldModel.VARIABLE_TABLE;
            }
          } else if (field.fieldType.count > 0 && field.fieldType.baseType !== 'char') {
            field.model = FieldModel.FIXED_ARRAY;
          } else if (field.fieldType.baseType === 'CUtlVector') {
            field.model = FieldModel.VARIABLE_ARRAY;
          } else {
            field.model = FieldModel.SIMPLE;
          }

          fields[index] = field;
        }
        serializer.fields.push(field);
      }

      this.serializers.add(serializer);

      const cls = this.classes.byName[serializer.name];
      if (cls) {
        cls.serializer = serializer;
      }
    }
  }

  onCSVCMsg_PacketEntities(msg) {
    const reader = new Reader(msg.entityData);

    let index = -1;
    let cmd;
    let classId;
    let serial;
    let entity;
    let event;

    if (!msg.isDelta) {
      if (this.entityFullPacketCount > 0) {
        return;
      }
      this.entityFullPacketCount++;
    }

    for (let i = msg.updatedEntries; i > 0; --i) {
      index += reader.readUBitVar() + 1;
      event = EntityEvent.NONE;
      cmd = reader.readBitInt(2);
      if ((cmd & 0x01) === 0) {
        if ((cmd & 0x02) !== 0) {
          classId = reader.readBitInt(this.classIdSize);
          serial = reader.readBitInt(SERIAL_BITS);
          reader.readVarUint32();

          const cls = this.classes.byId[classId];
          if (!cls) {
            throw new Error(`unable to find new class: ${classId}`);
          }

          const baseline = this.classBaselines[classId];
          if (!baseline) {
            throw new Error(`unable to find new baseline: ${classId}`);
          }

          entity = this.entities.create(index, serial, cls);
          new Reader(baseline).readFieldsInto(entity.state, cls.serializer);
          reader.readFieldsInto(entity.state, cls.serializer);
          event = EntityEvent.CREATED | EntityEvent.ENTERED;
        } else {
          entity = this.entities.byIndex[index];
          if (!entity) {
            throw new Error(`unable to find existing entity: ${index}`);
          }

          event = EntityEvent.UPDATED;
          if (!entity.active) {
            entity.active = true;
            event |= EntityEvent.ENTERED;
          }
          reader.readFieldsInto(entity.state, entity.class.serializer);
        }
      } else {
        entity = this.entities.byIndex[index];
        if (!entity) {
          throw new Error(`unable to find existing entity: ${index}`);
        }

        if (!entity.active) {
          throw new Error(`entity ${entity.class.name} ordered to leave, already inactive`);
        }

        event = EntityEvent.LEFT;
        if ((cmd & 0x02) !== 0) {
          event |= EntityEvent.DELETED;
          this.entities.delete(entity);
        }
      }

      this.emitter.emit('entity', entity, event);
    }
  }

  updateInstanceBaseline() {
    const table = this.stringTables.byName.instancebaseline;
    if (!table) {
      return;
    }

    for (const entry of table.entries) {
      const classId = +entry.key;
      this.classBaselines[classId] = entry.data;
    }
  }
}

const prioritizePendingMessages = (a, b) => {
  const ap = priorityForType(a);
  const bp = priorityForType(b);
  return ap - bp;
};

export default Parser;
export { TICK_RATE_MS };
