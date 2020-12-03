import { computed, makeObservable, observable } from 'mobx';

import Hero from './Hero.js';

class Team {
  constructor(replay, eid) {
    this.replay = replay;
    this.eid = eid;

    this.id = null;
    this.name = null;
    this.kills = 0;
    this.proID = null;

    makeObservable(this, {
      id: observable,
      name: observable,
      kills: observable,
      proID: observable,

      heroes: computed,
      players: computed,
      units: computed,
    });
  }

  get heroes() {
    // TODO: This does not handle illusions properly
    return this.replay.units.filter((u) => (
      u instanceof Hero && u.teamID === this.id
    ));
  }

  get players() {
    return this.replay.players.filter((p) => p.teamID === this.id);
  }

  get units() {
    return this.replay.units.filter((u) => u.teamID === this.id);
  }
}

export default Team;
