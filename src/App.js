import React, { Fragment, useState } from 'react';

import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header';
import Cart from './Components/Carts/Cart';

function App() {
  const [isShown, setIsShown] = useState(false);

  const showCartHandler = () => {
    setIsShown(true);
  };

  const hideCartHandler = () => {
    setIsShown(false);
  };

  return (
    <Fragment>
      {isShown && <Cart onClose={hideCartHandler} />}
      <Header onClickHandler={ showCartHandler } />
      <Meals />
    </Fragment>
  );
}

export default App;
