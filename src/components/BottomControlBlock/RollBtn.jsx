import React from 'react';

const RollBtn = (props) => {
  return(
    <button
      onClick={ props.onClick }
      tabIndex="-1"
      className="btn"
    >Roll</button>
  )
}

export default RollBtn
