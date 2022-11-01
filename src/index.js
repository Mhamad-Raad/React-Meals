import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
  <Router>
    <Route exact path="/">
      <App />
    </Route>
  </Router>;

root.render(<App />);
