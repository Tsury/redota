import { makeObservable, observable } from 'mobx';

import Cooldown from '../Cooldown.js';
import { abilitiesByName } from '../../definitions/index.js';

import Entity from './Entity.js';

class Ability extends Entity {
  constructor(replay, ...args) {
    super(replay, ...args);

    this.cooldown = new Cooldown(replay);
    this.hidden = false;
    this.level = null;
    this.manaCost = null;

    this.definition = abilitiesByName[this.refname];

    makeObservable(this, {
      cooldown: observable,
      hidden: observable,
      level: observable,
      manaCost: observable,
    });
  }

  get isSeasonal() {
    return this.refname.startsWith('seasonal_');
  }

  // TODO: Surely there is a better way to determine this?
  get isTalent() {
    return this.refname.startsWith('special_bonus_')
           || this.refname.startsWith('ad_special_bonus_');
  }

  get maxLevel() {
    return this.definition.maxLevel ?? this.level;
  }
}

export default Ability;
