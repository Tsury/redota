import React from 'react';
import styled from 'styled-components';

const StyledTime = styled.span``;

const Time = (props) => {
  let { time } = props;
  const sign = time < 0 ? '-' : '';
  time = Math.abs(time);
  const hours = time / 3600 | 0;
  time %= 3600;
  const mins = time / 60 | 0;
  time %= 60;
  const secs = time | 0;
  return (
    <StyledTime>
      {sign}
      {hours > 0 && (
        <>
          {hours}
          :
        </>
      )}
      {`00${mins}`.slice(-2)}
      :
      {`00${secs}`.slice(-2)}
      {sign ? ' ' : ''}
    </StyledTime>
  );
};

export default Time;
export { StyledTime };
