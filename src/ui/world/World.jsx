import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Entity from './Entity.jsx';
import Map from './Map.jsx';

const DOTA_MAP_SIZE = 16384;
const REDOTA_MAP_SIZE = 4000;

const scale = (value) => (REDOTA_MAP_SIZE / DOTA_MAP_SIZE) * value;

const StyledWorld = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  background-image:
    linear-gradient(45deg, #222 25%, transparent 25%),
    linear-gradient(-45deg, #222 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #222 75%),
    linear-gradient(-45deg, transparent 75%, #222 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  cursor: ${(props) => (props.dragging ? 'grabbing' : 'grab')};
`;

const World = (props) => {
  const {
    entities, focus, selectedEntity, setSelection,
  } = props;

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!focus) return;
    setX(-scale(focus.x));
    setY(scale(focus.y));
  }, [focus]);

  const move = (dx, dy) => {
    if (dx) setX((cx) => cx + dx);
    if (dy) setY((cy) => cy + dy);
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const onMouseUp = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const onMouseMove = (e) => {
    if (dragging) move(e.movementX, e.movementY);
  };

  return (
    <StyledWorld
      dragging={dragging}
      onDoubleClick={(e) => e.preventDefault()}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <Map style={{ transform: `translate(${x}px, ${y}px)` }}>
        {entities.map((entity) => (
          <Entity
            key={entity.id}
            {...entity}
            x={scale(entity.x)}
            y={scale(entity.y)}
            selected={selectedEntity === entity}
            onClick={() => setSelection(entity.id)}
          />
        ))}
      </Map>
    </StyledWorld>
  );
};

export default World;
