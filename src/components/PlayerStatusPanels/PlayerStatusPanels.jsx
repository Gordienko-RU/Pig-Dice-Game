import React from 'react';
import createPlayers from './createPlayers.js';

const PlayerStatusPanels = (props) => {
  return(
    <div className="players-container">
      { createPlayers(props.playersArr) }
    </div>
  )
}

export default PlayerStatusPanels
