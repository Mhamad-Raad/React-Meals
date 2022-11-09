import React, { useContext, useEffect, useState } from 'react';

import CSSClasses from './HeaderCartButton.module.css';
import { BsCart4 } from "react-icons/bs";

import cartContext from '../../Context/CartContext'
const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx;
  const [btnHighlighted, setbtnHighlighted] = useState(false);
  useEffect(
    () => {
      if (items.length === 0) {
        return;
      }
      setbtnHighlighted(true);
      const timer = setTimeout(() => {
        setbtnHighlighted(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }, [items]
  );

  const buttonClasses = [CSSClasses.button, btnHighlighted===true?CSSClasses.bump: ''].join(' ');

  return (
    <button className={buttonClasses} onClick={props.onClickHandler}>
      <span className={CSSClasses.icon}>
        <BsCart4 />
      </span>
      <span className={CSSClasses.btnText}>Your Cart</span>
      <span className={CSSClasses.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;
