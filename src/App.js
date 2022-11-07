import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes,
} from 'react-router-dom';

import Home from './Home';



function App() {

  
  return (
    <Router>
      <Routes>
        <Route exact path="React-Meals/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
