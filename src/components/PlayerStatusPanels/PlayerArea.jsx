import React from 'react';

const PlayerBlock = (props) => {
  return(
    <div className="player-area">
      <p> { props.playerName } </p>
      <p> global score: { props.globalScore } </p>
    </div>
  )
};

export default PlayerBlock
