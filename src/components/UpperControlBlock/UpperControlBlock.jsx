import React from 'react';
import NewGameBtn from './NewGameBtn.jsx';
import ReferenceBtn from './ReferenceBtn.jsx';
import handleReference from './handleReference.js';

const UpperControlBlock = (props) => {
  return(
    <div className="upper-container-wrapper">
        <div className="upper-control-container">
          <NewGameBtn
            onClick={ props.handleNewGame }
          />
        </div>
        <ReferenceBtn
          onClick={ handleReference }
        />
    </div>
  )
}

export default UpperControlBlock
