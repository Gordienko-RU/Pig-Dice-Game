import React from 'react';
import HoldBtn from './HoldBtn.jsx';
import RollBtn from './RollBtn.jsx';

const BottomControlBlock = (props) => {
  return(
    <div
      className={ 'bottom-control-container ' + (props.disabled ? 'disabled-block' : '') }
    >
      <p>Current score: { props.currentScore }</p>
      <RollBtn
        onClick={ props.handleRoll }
      />
      <HoldBtn
        onClick={ props.handleHold }
      />
    </div>
  )
}

export default BottomControlBlock
