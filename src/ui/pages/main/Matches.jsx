import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Button, { StyledButton } from '../../components/Button.jsx';
import ErrorBoundary from '../../components/ErrorBoundary.jsx';
import Link from '../../components/Link.jsx';
import Notice from '../../components/Notice.jsx';
import db from '../../../lib/database/index.js';
import { HStack } from '../../components/Stack.jsx';
import { useDatabaseQuery } from '../../hooks/index.js';

import Match from './Match.jsx';

const StyledActions = styled(HStack)`
  margin-top: .8125rem;

  ${StyledButton} {
    margin: 1em;
  }
`;

const MatchList = () => {
  const history = useHistory();

  const [matches, isLoading] = useDatabaseQuery(() => (
    db.models.Match.query.orderBy('endedAt').reverse().toArray()
  ));

  const openFindMatchModal = useCallback(() => {
    history.push('/matches/find');
  }, [history]);

  const openSelectReplayModal = useCallback(() => {
    history.push('/matches/select');
  }, [history]);

  // Calculate replay size usage in megabytes
  let usage = null;
  if (!isLoading) {
    const bytes = matches.reduce((total, match) => total + match.replay.size, 0);
    usage = Math.round(bytes / (1000 * 1000));
  }

  const sample = (
    <Link to="http://replay138.valve.net/570/5712001132_579859928.dem.bz2">
      Download a replay of a pro-team match
    </Link>
  );

  return (
    <>
      {/* TODO: Add loading indicator */}
      {!isLoading && matches.map((match) => (
        <Match key={match.uuid} match={match} />
      ))}

      {!isLoading && !matches.length && (
        <Notice kind="instructions">
          Need a replay file to get started?<br />
          {sample}, unzip it and select it below.
        </Notice>
      )}

      <StyledActions justify="center">
        <Button fancy onClick={openFindMatchModal} disabled>
          Find replays by match ID
        </Button>

        <Button fancy onClick={openSelectReplayModal}>
          Select a local replay file
        </Button>
      </StyledActions>

      {usage > 0 && (
        <p>
          The above replays take up approximately <strong>{usage} MB</strong> of storage space
          in your browser. Use the trash cans to get rid of unwanted replays.
        </p>
      )}
    </>
  );
};

const StyledMatches = styled.div``;

const Matches = () => (
  <StyledMatches>
    <h2>Matches</h2>

    <ErrorBoundary context="database">
      <MatchList />
    </ErrorBoundary>

    <p>
      <strong>Note:</strong> your browser may occasionally perform house keeping and remove
      website data including the replays. Maintain a local copy on your computer if you need them.
    </p>
  </StyledMatches>
);

export default Matches;
export { StyledMatches };