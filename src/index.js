import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// import { store } from './store/redux';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import TopMenu from './components/TopMenu'



ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <div>
        <TopMenu />
        <Route path="/" component={App} />
        <Route path="/about" component={App} />
      </div>
    </BrowserRouter>
  </Provider>

  ,document.getElementById('root'));
//registerServiceWorker();
