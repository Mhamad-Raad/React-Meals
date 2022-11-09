import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';

import CSSClasses from './MealItemForm.module.css';


const MealItemForm = ( props ) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const InputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = InputRef.current.value;
    const enteredAmountn = +enteredAmount;

    if (enteredAmountn === 0 || enteredAmountn < 1 || enteredAmountn > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountn);
  };

 

  return (
    <form className={CSSClasses.form} onSubmit={submitHandler}>
      <Input
        ref={InputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
