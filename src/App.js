import React, { Fragment } from 'react';

import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
