import React from 'react';
import RegularBtn from '../buttons/RegularBtn.jsx';

const UpperControlBlock = (props) => {
  return(
    <div className="upper-container-wrapper">
        <div className="upper-control-container">
          <RegularBtn
            onClick={ props.handleNewGame }
            title="New game"
        />
        </div>
        <RegularBtn
          onClick={ props.handleReference }
          title='?'
          className="btn-reference"
        />
    </div>
  )
}

export default UpperControlBlock
