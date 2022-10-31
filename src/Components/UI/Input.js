import React from 'react';

import CSSClasses from './Input.module.css';

const Input = (props) => {
  return (
    <div className={CSSClasses.input}>
      <label htmlFor={props.input.id}>{ props.label }</label>
      <input {...props.input} />
    </div>
  );
}

export default Input;