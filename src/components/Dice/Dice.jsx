import React from 'react';
import pointsHandler from './pointsHandler.js';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.roll !== this.props.roll) {
      const points = pointsHandler.updatePoints(this.props.roll);
      this.setState({ points });
    }
  };

  render() {
    return(
      <div className="dice">
        { pointsHandler.createPoints(this.state.points) }
      </div>
    )
  }
}

export default Dice
