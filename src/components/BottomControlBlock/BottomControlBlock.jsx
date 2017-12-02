import React from 'react';
import HoldBtn from './HoldBtn.jsx';
import RollBtn from './RollBtn.jsx';

const BottomControlBlock = () => {
  return(
    <div className="bottom-control-container">
      <RollBtn />
      <HoldBtn />
    </div>
  )
}

export default BottomControlBlock
