import React from 'react';
import PlayerStatusPanels from './PlayerStatusPanels/PlayerStatusPanels.jsx';
import BottomControlBlock from './BottomControlBlock/BottomControlBlock.jsx';
import Dice from './Dice/Dice.jsx';

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
      ],
      currentScore: 0,
      activePlayerIndex: 0,
      diceRoll: 0
    };
    this.handleHold = this.handleHold.bind(this);
    this.handleRoll = this.handleRoll.bind(this);
  };

  changeActivePlayer() {
    this.setState((prevState) => {
      return { activePlayerIndex: prevState.activePlayerIndex ? 0 : 1 }
    })
  }

  overrideCurent() {
    this.setState({ diceRoll: 0, currentScore: 0 });
  }

  addToGlobal() {
    this.setState((prevState) => {
      let { players, currentScore, activePlayerIndex } = prevState;
      players[activePlayerIndex].globalScore += currentScore;
      return({ players })
    })
  }

  handleHold() {
    this.addToGlobal();
    this.overrideCurent();
    this.changeActivePlayer();
  }

  handleRoll() {
    const maxRoll = 6;
    const minRoll = 1;
    const diceRoll = Math.round(Math.random() * (maxRoll - minRoll) + minRoll);
    this.setState((previousState) => ({
      diceRoll,
      currentScore: previousState.currentScore + diceRoll
    }));
  }



  render() {
    return(
      <div className="interface-container">
        <PlayerStatusPanels
          playersArr={ this.state.players }
          activePlayerIndex={ this.state.activePlayerIndex }
        />
        <Dice
          roll={ this.state.diceRoll }
        />
        <BottomControlBlock
          currentScore={ this.state.currentScore }
          handleHold={ this.handleHold }
          handleRoll={ this.handleRoll }
        />
      </div>
    )
  }
};

export default PlayBoard
