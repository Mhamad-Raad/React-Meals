import React, { useState } from 'react';

import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header';
import Cart from './Components/Carts/Cart';
import CartProvider from './Context/CartProvider';

const Home = () => {

    const [isShown, setIsShown] = useState(false);

  const showCartHandler = () => {
    setIsShown(true);
  };

  const hideCartHandler = () => {
    setIsShown(false);
  };


  return (
    <React.Fragment>
        <CartProvider>
            {isShown && <Cart onClose={ hideCartHandler } />}
            <Header onClickHandler={ showCartHandler } />
            <Meals />
        </CartProvider>
      </React.Fragment>
  );
}

export default Home;