import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'



ReactDOM.render(
  <Provider>
    <Router>
      
    </Router>
  </Provider>

  ,document.getElementById('root'));
//registerServiceWorker();
