import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  ActiveFilter, Bar, HeroResource, PlayerColor,
} from '../../../components/index.js';

const StyledHeroListEntry = styled.div`
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`;

const HeroListEntry = observer((props) => {
  const { hero, onClick } = props;
  const {
    color, isDead, hp, hpMax, mp, mpMax, refname, teamID,
  } = hero;
  return (
    <StyledHeroListEntry onClick={onClick}>
      <PlayerColor color={color} />
      <ActiveFilter active={!isDead}>
        <HeroResource refname={refname} variant="landscape" />
        <Bar type="health" size="mini" value={hp} max={hpMax} teamID={teamID} />
        <Bar type="mana" size="mini" value={mp} max={mpMax} />
      </ActiveFilter>
    </StyledHeroListEntry>
  );
});

export default HeroListEntry;
