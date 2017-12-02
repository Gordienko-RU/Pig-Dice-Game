import React from 'react';
import PlayerStatusPanels from './PlayerStatusPanels/PlayerStatusPanels.jsx';
import BottomControlBlock from './BottomControlBlock/BottomControlBlock.jsx';
import Dice from './Dice.jsx';

class PlayBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          playerName: 'Player 1',
          globalScore: 0
        },
        {
          playerName: 'Player 2',
          globalScore: 0
        }
      ]
    }
  };

  render() {
    return(
      <div className="interface-container">
        <PlayerStatusPanels
          playersArr={ this.state.players }
        />
        <Dice />
        <BottomControlBlock />
      </div>
    )
  }
};

export default PlayBoard
