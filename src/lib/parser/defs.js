/* eslint-disable no-param-reassign */

import defs from '../../../dota/compiled.cjs';

export const { dota } = defs;

export const { CDemoPacket } = dota;
export const { CDOTAMatchMetadataFile } = dota;
export const { CDOTAUserMsg_StatsHeroMinuteDetails } = dota;
export const { CMsgDOTACombatLogEntry } = dota;
export const { CMsgGCToClientTournamentItemDrop } = dota;
export const { CSVCMsg_FlattenedSerializer } = dota;

export const { EBaseEntityMessages } = dota;
export const { EBaseGameEvents } = dota;
export const { EBaseUserMessages } = dota;
export const { EDemoCommands } = dota;
export const { EDotaUserMessages } = dota;
export const { NET_Messages } = dota;
export const { SVC_Messages } = dota;

const mapping = (enumeration, search, replace, lookup = {}) => {
  for (const [name, value] of Object.entries(enumeration)) {
    const type = dota[name.replace(search, replace)];
    if (type) {
      lookup[value] = [type];
    }
  }
  return lookup;
};

export const commandToTypeMapping = {
  ...mapping(EDemoCommands, 'DEM_', 'CDemo', {
    [EDemoCommands.DEM_SignonPacket]: [CDemoPacket, 'CDemoSignonPacket'],
  }),
};

export const packetToTypeMapping = {
  ...mapping(EBaseEntityMessages, 'EM_', 'CEntityMessage'),
  ...mapping(EBaseGameEvents, 'GE_', 'CMsg'),
  ...mapping(EBaseUserMessages, 'UM_', 'CUserMessage'),
  ...mapping(EDotaUserMessages, 'DOTA_UM_', 'CDOTAUserMsg_', {
    [EDotaUserMessages.DOTA_UM_TournamentDrop]: [CMsgGCToClientTournamentItemDrop],
    [EDotaUserMessages.DOTA_UM_StatsHeroDetails]: [CDOTAUserMsg_StatsHeroMinuteDetails],
    [EDotaUserMessages.DOTA_UM_CombatLogDataHLTV]: [CMsgDOTACombatLogEntry],
    [EDotaUserMessages.DOTA_UM_MatchMetadata]: [CDOTAMatchMetadataFile],
  }),
  ...mapping(NET_Messages, 'net_', 'CNETMsg_'),
  ...mapping(SVC_Messages, 'svc_', 'CSVCMsg_'),
};

export const priorityForType = (type) => {
  switch (type) {
    // High priority: provides context for the rest of the tick
    case NET_Messages.net_Tick:
    case SVC_Messages.svc_CreateStringTable:
    case SVC_Messages.svc_UpdateStringTable:
    case NET_Messages.net_SpawnGroup_Load:
      return -10;
    // Medium priority: provides and needs context for the rest of the tick
    case SVC_Messages.svc_PacketEntities:
      return 5;
    // Low priority: mostly needs context for the rest of the tick
    case EBaseGameEvents.GE_Source1LegacyGameEvent:
      return 10;
    default:
      return 0;
  }
};
