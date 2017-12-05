import React from 'react';

const ReferenceBtn = (props) => {
  return(
    <button
      onClick={ props.onClick }
      tabIndex="-1"
      className="btn btn-reference"
    >?</button>
  )
}

export default ReferenceBtn
