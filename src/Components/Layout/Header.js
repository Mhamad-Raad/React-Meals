import React from 'react';

import CartButton from './HeaderCartButton';

import CSSClasses from './Header.module.css';
import HeaderIMG from '../../Assets/a.jpg';

const Header = (props) => {
  return (
    <>
      <header className={CSSClasses.header}>
        <h1>React Meals</h1>
        <CartButton onClickHandler={ props.onClickHandler} />
      </header>

      <div className={ CSSClasses.main_image}>
        <img src={HeaderIMG} alt="nice foods on the table!!" />
      </div>
    </>
  );
}

export default Header;
