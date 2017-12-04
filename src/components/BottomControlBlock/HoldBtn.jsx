import React from 'react';

const HoldBtn = (props) => {
  return(
    <button onClick={ props.onClick } tabIndex="-1">Hold</button>
  )
}

export default HoldBtn
