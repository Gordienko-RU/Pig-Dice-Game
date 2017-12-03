import React from 'react';
import PlayerBlock from './PlayerArea.jsx';

const createPlayers = (playersArr, activePlayerIndex) => {
  return playersArr.map((playerObj, index) => {
    return (
      <PlayerBlock
        key={ index }
        { ...playerObj }
        className={ "player-area " + (activePlayerIndex === index ? "active-player" : "") }
      />
    )
  })
};

export default createPlayers
