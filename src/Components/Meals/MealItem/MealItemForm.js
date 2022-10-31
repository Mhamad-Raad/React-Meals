import React from 'react';

import Input from '../../UI/Input';

import CSSClasses from './MealItemForm.module.css';


const MealItemForm = ({id}) => {
  return (
    <form className={CSSClasses.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
