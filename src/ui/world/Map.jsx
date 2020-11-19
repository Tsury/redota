import React from 'react';
import styled from 'styled-components';

// Due to Dota 2's Y coordinate being flipped compared to web coordinates most
// of this styling uses `bottom` as well as various flipped Y transforms.
const StyledMap = styled.div`
  position: absolute;
  // Adding an additional 8% to place the camera a bit higher up for comfort
  bottom: 58%;
  left: 50%;
`;

const StyledOffset = styled.div`
  position: relative;

  & > img {
    position: relative;
    width: 4000px;
    height: 4000px;
    // Minor offsets here to get the map to align with actual entities
    transform: translate(-50.2%, 50.5%)
  }
`;

const StyledWebPFallback = styled.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  text-align: center;

  & p {
    margin: 10px 10px;
  }
`;

const Map = (props) => {
  const { children, style } = props;
  return (
    <StyledMap style={style}>
      <StyledOffset>
        <StyledWebPFallback>
          <p>Loading the Dota 2 map background...</p>
          <p>If it never loads, your browser may not support the WebP image format.</p>
          <p>¯\_(ツ)_/¯</p>
        </StyledWebPFallback>
        <img src="./images/map-7.27.webp" alt="Dota 2 map" />
        {children}
      </StyledOffset>
    </StyledMap>
  );
};

export default Map;
