import React from 'react';
import PlayerBlock from './PlayerArea.jsx';

function createPlayers(playersArr) {
  return playersArr.map((playerObj, number) => {
    return (
      <PlayerBlock
        key={ number }
        { ...playerObj }
      />
    )
  })
};

export default createPlayers
