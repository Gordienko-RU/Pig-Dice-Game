import React from 'react';
import Point from './Point.jsx';

const createPoints = (pointsArr) => {
  return pointsArr.map((visible, index) => {
    const className = ('point ' + (visible ? '' : 'hidden'));
    return <Point
      className={ className }
      key={ index }
    />
  })
}

const updatePoints = (roll) => {
  let points;
  switch(roll) {
    case 1: points = [0, 0, 0, 0, 1, 0, 0, 0, 0]; break;
    case 2: points = [1, 0, 0, 0, 0, 0, 0, 0, 1]; break;
    case 3: points = [1, 0, 0, 0, 1, 0, 0, 0, 1]; break;
    case 4: points = [1, 0, 1, 0, 0, 0, 1, 0, 1]; break;
    case 5: points = [1, 0, 1, 0, 1, 0, 1, 0, 1]; break;
    case 6: points = [1, 1, 1, 0, 0, 0, 1, 1, 1]; break;
    default: points = [0, 0, 0, 0, 0, 0, 0, 0, 0]; break;
  }
  console.log(points);
  return points
}

const pointsHandler = {
  createPoints,
  updatePoints
}

export default pointsHandler;
