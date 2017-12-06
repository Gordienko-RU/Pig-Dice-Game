import React from 'react';
import RegularBtn from '../buttons/RegularBtn.jsx';

const BottomControlBlock = (props) => {
  return(
    <div
      className={ 'bottom-control-container ' + (props.disabled ? 'disabled-block' : '') }
    >
      <p>Current score: { props.currentScore }</p>

      <RegularBtn
        onClick={ props.handleRoll }
        title="Roll"
      />
      
      <RegularBtn
        onClick={ props.handleHold }
        title="Hold"
      />
    </div>
  )
}

export default BottomControlBlock
