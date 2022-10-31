import React from 'react';
import CSSClasses from './HeaderCartButton.module.css';
import { BsCart4 } from "react-icons/bs";
 
const HeaderCartButton = (props) => { 
  return (
    <button className={CSSClasses.button}>
      <span className={CSSClasses.icon}>
        <BsCart4 />
      </span>
      <span>Your Cart</span>
      <span className={CSSClasses.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton;
