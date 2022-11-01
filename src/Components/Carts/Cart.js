import React, { useContext } from 'react';

import CSSClasses from './Cart.module.css';

import CartContext from '../../Context/CartContext';
import Modal from '../UI/Modal';
import CartItem from './CartItem';


const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeItem = (id) => {
    cartCtx.removeItem(id);
  }

  const addItem = (item) => {
    console.log(item);
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = <ul className={CSSClasses['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartCtx.removeItem.bind(null, item.id)}
        onAdd={cartCtx.addItem.bind(null, item)}
      />
  ))}</ul>;

  return (
    <Modal onClickHandler={ props.onClose }>
      {cartItems}
      <div className={CSSClasses.total}>
        <span>Total Amount</span>
        <span>{ totalAmount }</span>
      </div>
      <div className={CSSClasses.actions}>
        <button className={CSSClasses['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={CSSClasses.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;