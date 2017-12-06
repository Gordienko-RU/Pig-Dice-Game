import React from 'react';

const ModalWindow = (props) => {
  return(
    <div className="modal-window" onClick={ props.onClick }>
      <div className="modal-content">
        <h2>{ props.title }</h2>
        <p>{ props.description }</p>
      </div>
    </div>
  )
}

export default ModalWindow
