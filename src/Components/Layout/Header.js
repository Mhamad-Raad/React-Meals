import React from 'react';

import CartButton from './HeaderCartButton';

import CSSClasses from './Header.module.css';
import HeaderIMG from '../../Assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={CSSClasses.header}>
        <h1>React Meals</h1>
        <CartButton />
      </header>

      <div className={ CSSClasses['main-image']}>
        <img src={HeaderIMG} alt="nice foods on the table!!" />
      </div>
    </>
  );
}

export default Header;
