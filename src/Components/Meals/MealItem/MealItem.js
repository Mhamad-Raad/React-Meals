import React, { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../Context/CartContext';

import CSSClasses from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  return (
    <li className={CSSClasses.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={CSSClasses.description}>{props.description}</div>
        <div className={CSSClasses.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={ onAddToCart } />
      </div>
    </li>
  );
}

export default MealItem;
