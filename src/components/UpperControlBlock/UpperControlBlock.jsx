import React from 'react';
import NewGameBtn from './NewGameBtn.jsx';

const UpperControlBlock = (props) => {
  return(
    <div className="upper-control-container">
      <NewGameBtn
        onClick={ props.handleNewGame }
      />
    </div>
  )
}

export default UpperControlBlock
