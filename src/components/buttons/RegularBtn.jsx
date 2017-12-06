import React from 'react';

const RegularBtn = (props) => {
  return(
    <button
      onClick={ props.onClick }
      tabIndex="-1"
      className={ 'btn ' + (props.className ? props.className : '') }
    >{ props.title }</button>
  )
}

export default RegularBtn
