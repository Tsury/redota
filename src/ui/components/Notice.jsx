import React from 'react';
import styled, { css } from 'styled-components';

const StyledNotice = styled.p`
  color: #BBB;
  text-align: center;

  ${(props) => props.kind === 'error' && css`
    color: #C22E1F;
  `}
`;

const Notice = (props) => {
  const { children, kind = 'notice' } = props;
  return (
    <StyledNotice kind={kind}>
      {children}
    </StyledNotice>
  );
};

export default Notice;
