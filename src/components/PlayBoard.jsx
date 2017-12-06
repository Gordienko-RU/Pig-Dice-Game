import React from 'react';
import UpperControlBlock from './UpperControlBlock/UpperControlBlock.jsx';
import PlayerStatusPanels from './PlayerStatusPanels/PlayerStatusPanels.jsx';
import BottomControlBlock from './BottomControlBlock/BottomControlBlock.jsx';
import Dice from './Dice/Dice.jsx';
import ModalWindow from './ModalWindow/ModalWindow.jsx';
import POINTS_FOR_WIN from '../../config.js';
import services from './services.js';
import initialState from './initialState.js';
import reference from './reference.js';

class PlayBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = services.copyObject(initialState);
    this.handleHold = this.handleHold.bind(this);
    this.handleRoll = this.handleRoll.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleReference = this.handleReference.bind(this);
    this.handleModalWindow = this.handleModalWindow.bind(this);

  };

  changeActivePlayer(prevState) {
    const activePlayerIndex = prevState.activePlayerIndex ? 0 : 1;
    return activePlayerIndex
  }

  overrideCurent() {
    return { diceRoll: 0, currentScore: 0 }
  }

  addToGlobal() {
    this.setState((prevState) => {
      const { players, currentScore, activePlayerIndex } = prevState;
      players[activePlayerIndex].globalScore += currentScore;
      return({ players })
    })
  }

  checkWinner() {
    this.setState((prevState) => {
      const { activePlayerIndex, players } = prevState;
      const activePlayer = players[activePlayerIndex];
      if (activePlayer.globalScore >= POINTS_FOR_WIN) {
        activePlayer.playerName = 'WINNER';
        activePlayer.globalScore = 100;
        return { players, thereIsWinner: true, disabled: true }
      }
    })
  }

  handleHold() {
    this.addToGlobal();
    this.checkWinner();
    this.setState((prevState) => {
      if (!prevState.thereIsWinner) {
        const activePlayerIndex = this.changeActivePlayer(prevState);
        return { activePlayerIndex }
      }
    });
    this.setState(() => {
      const { diceRoll, currentScore } = this.overrideCurent();
      return { diceRoll, currentScore }
    });
  }

  handleRoll() {
    const diceRoll = services.getRandom(1, 6);
    this.setState((previousState) => ({
      diceRoll,
      currentScore: previousState.currentScore + diceRoll
    }));
    if (diceRoll === 1) {
      this.setState((prevState) => {
        return { disabled: true }
      });
      setTimeout(() => {
        this.setState((prevState) => {
        const { diceRoll, currentScore } = this.overrideCurent();
        const activePlayerIndex = this.changeActivePlayer(prevState);
        return { diceRoll, currentScore, activePlayerIndex, disabled: false }
      })}, 1000);

    }
  }

  handleNewGame() {
    this.setState(initialState);
  }

  handleReference() {
    this.setState({ modalActive: true });
  }

  handleModalWindow() {
    this.setState({ modalActive: false });
  }

  render() {
    return(
      <div className="interface-container">
        <UpperControlBlock
          handleNewGame={ this.handleNewGame }
          handleReference={ this.handleReference }
        />
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
          disabled={ this.state.disabled }
        />
        { this.state.modalActive && <ModalWindow
          { ...reference }
          onClick={ this.handleModalWindow }
        /> }
      </div>
    )
  }
};

export default PlayBoard
