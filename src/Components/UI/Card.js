import React from 'react';

import CSSClasses from './Card.module.css';

const Card = (props) => {
  return (
    <div className={CSSClasses.card}>
      {props.children}
    </div>
  );
}

export default Card;