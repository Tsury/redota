import React from 'react';
import styled from 'styled-components';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { HomePage, ReplayPage } from './pages/index.js';

const StyledReDota = styled.div`
  box-sizing: content-box;
  font-family: 'Galdeano', sans-serif;
  letter-spacing: 1px;
`;

const ReDota = () => (
  <StyledReDota>
    <HashRouter>
      <Switch>
        <Route path="/replay"><ReplayPage /></Route>
        <Route path="/"><HomePage /></Route>
      </Switch>
    </HashRouter>
  </StyledReDota>
);

export default ReDota;
