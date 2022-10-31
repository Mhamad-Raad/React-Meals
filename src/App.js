import React, { useState } from 'react';

import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header';
import Cart from './Components/Carts/Cart';
import CartProvider from './Context/CartProvider';

function App() {
  const [isShown, setIsShown] = useState(false);

  const showCartHandler = () => {
    setIsShown(true);
  };

  const hideCartHandler = () => {
    setIsShown(false);
  };
  
  return (
    <CartProvider>
      {isShown && <Cart onClose={hideCartHandler} />}
      <Header onClickHandler={ showCartHandler } />
      <Meals />
    </CartProvider>
  );
}

export default App;
