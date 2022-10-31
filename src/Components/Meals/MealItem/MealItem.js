import React from 'react';

import CSSClasses from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={CSSClasses.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={CSSClasses.description}>{props.description}</div>
        <div className={CSSClasses.price}>{price}</div>
      </div>
      <div>
        <button>+ Add</button>
      </div>
    </li>
  );
}

export default MealItem;
