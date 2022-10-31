import React from 'react';


import CSSClasses from './Cart.module.css';

import Modal from '../UI/Modal';


const Cart = (props) => {
  const cartItems = <ul className={CSSClasses['cart-items']}>
    {[
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
  ].map((item) => (
    <li>{item.name}</li>
  ))}</ul>;

  return (
    <Modal onClickHandler={ props.onClose }>
      {cartItems}
      <div className={CSSClasses.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={CSSClasses.actions}>
        <button className={CSSClasses['button--alt']} onClick={props.onClose}>Close</button>
        <button className={CSSClasses.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;