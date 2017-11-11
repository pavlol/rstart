//import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/redux';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
import TopMenu from './components/TopMenu'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <TopMenu />
          <Switch>
            <Route path="/about" component={App} />
            <Route path="/" component={App} />
          </Switch>
      </div>
    </BrowserRouter>
  </Provider>

  ,document.getElementById('root'));
//registerServiceWorker();
