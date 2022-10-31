import React, { useContext } from 'react';

import CSSClasses from './HeaderCartButton.module.css';
import { BsCart4 } from "react-icons/bs";

import cartContext from '../../Context/CartContext'
const HeaderCartButton = (props) => { 
  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={CSSClasses.button} onClick={props.onClickHandler}>
      <span className={CSSClasses.icon}>
        <BsCart4 />
      </span>
      <span>Your Cart</span>
      <span className={CSSClasses.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;
