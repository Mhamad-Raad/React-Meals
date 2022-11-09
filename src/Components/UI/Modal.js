import React from 'react';
import ReactDOM from 'react-dom';

import CSSClasses from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={CSSClasses.backdrop} onClick={props.onClick } />;

}

const ModalOverlay = (props) => {
  return (
    <div className={CSSClasses.modal}>
      <div className={CSSClasses.content}>{ props.children }</div>
    </div>
  );
}

const Modal = (props) => {
  const portalElement = document.getElementById('overlays');

  return (
    <>
      { ReactDOM.createPortal(<Backdrop onClick={ props.onClickHandler} />, portalElement)}
      { ReactDOM.createPortal (<ModalOverlay>{props.children}</ModalOverlay>, portalElement) }
    </>
  );
}

export default Modal;