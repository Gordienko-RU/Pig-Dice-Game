import React from 'react';

const NewGameBtn = (props) => {
  return(
    <button onClick={ props.onClick } tabIndex="-1">New game</button>
  )
}

export default NewGameBtn
