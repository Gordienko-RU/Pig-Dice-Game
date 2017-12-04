import React from 'react';
import pointsHandler from './pointsHandler.js';
import Point from './Point.jsx';

class Dice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    pointsHandler.hideAll();
  }

  componentDidUpdate() {
    pointsHandler.hideAll();
    pointsHandler.showMarkedPoints(this.props.roll)
  }

  render() {
    return(
      <div className="dice">
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
      </div>
    )
  }
}

export default Dice
