import { computed, makeObservable, observable } from 'mobx';

import { TEAM_COLORS, UNIT_NAMES } from '../../constants.js';

class Unit {
  constructor(replay, eid) {
    this.replay = replay;
    this.eid = eid;

    this.class = null;
    this.teamID = null;
    this.x = 0;
    this.y = 0;
    this.rotation = null;
    this.hp = 0;
    this.hpMax = 0;
    this.mp = 0;
    this.mpMax = 0;

    makeObservable(this, {
      class: observable,
      teamID: observable,
      x: observable,
      y: observable,
      rotation: observable,
      hp: observable,
      hpMax: observable,
      mp: observable,
      mpMax: observable,

      color: computed,
      isDead: computed,
      name: computed,
      team: computed,
    });
  }

  get color() {
    return TEAM_COLORS[this.teamID];
  }

  get isDead() {
    return this.hp <= 0;
  }

  get name() {
    return UNIT_NAMES[this.class];
  }

  get team() {
    return this.replay.teams.byId.get(this.teamID);
  }
}

export default Unit;
