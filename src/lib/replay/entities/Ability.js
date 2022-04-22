import { makeObservable, observable } from 'mobx';

import Cooldown from '../Cooldown.js';
import { abilitiesByName } from '../../definitions/index.js';

import Entity from './Entity.js';

class Ability extends Entity {
  constructor(replay, ...args) {
    super(replay, ...args);

    this.cooldown = new Cooldown(replay);
    this.isHidden = false;
    this.level = null;
    this.manaCost = null;

    this.definition = abilitiesByName[this.refname];

    makeObservable(this, {
      cooldown: observable,
      isHidden: observable,
      level: observable,
      manaCost: observable,
    });
  }

  get isDotaPlus() {
    return this.refname.startsWith('plus_');
  }

  get isFluff() {
    return this.isDotaPlus || this.isSeasonal;
  }

  get isPassive() {
    return this.definition?.isPassive;
  }

  get isReady() {
    return this.isTrained && this.cooldown.remaining === 0;
  }

  get isSeasonal() {
    return this.refname.startsWith('seasonal_');
  }

  // TODO: Surely there is a better way to determine this?
  get isTalent() {
    return this.refname.startsWith('special_bonus_')
           || this.refname.startsWith('ad_special_bonus_');
  }

  get isTrained() {
    return this.level > 0;
  }

  get isVisible() {
    return !this.isHidden && this.refname !== 'neutral_upgrade';
  }

  get maxLevel() {
    return this.definition?.maxLevel ?? this.level;
  }

  get name() {
    return this.definition?.dname ?? this.refname;
  }
}

export default Ability;
