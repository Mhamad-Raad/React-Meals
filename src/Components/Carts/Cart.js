import React, { useContext, useState } from "react";

import CSSClasses from "./Cart.module.css";

import CartContext from "../../Context/CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items?.length > 0;
  const [isCheckout, setisCheckout] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didSubmit, setdidSubmit] = useState(false);

  const onOrderHandler = () => {
    setisCheckout(true);
  };

  const onOrderConfirm = async (userInfo) => {
    setisSubmitting(true);
    await fetch(
      "https://react-meals-37692-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userInfo,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setisSubmitting(false);
    setdidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={CSSClasses.cart_items}>
      {cartCtx.items?.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartCtx.removeItem.bind(null, item.id)}
          onAdd={cartCtx.addItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={CSSClasses.actions}>
      <button className={CSSClasses.button__alt} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={CSSClasses.button} onClick={onOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={CSSClasses.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {hasItems && isCheckout && (
        <Checkout onCancel={props.onClose} onConfirm={onOrderConfirm} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingContent = <p> Submitting the meals</p>;
  const didSubmitContent = (
    <>
      <p>Successfully submitted the meals</p>
      <div className={CSSClasses.actions}>
        <button className={CSSClasses.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClickHandler={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
