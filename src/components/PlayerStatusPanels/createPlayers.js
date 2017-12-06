import React from 'react';
import PlayerArea from './PlayerArea.jsx';

const createPlayers = (playersArr, activePlayerIndex) => {
  return playersArr.map((playerObj, index) => {
    return (
      <PlayerArea
        key={ index }
        { ...playerObj }
        className={ "player-area " + (activePlayerIndex === index ? "active-player" : "") }
      />
    )
  })
};

export default createPlayers
