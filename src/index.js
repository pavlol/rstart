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
import TopMenu from './components/TopMenu';
import ItemShow from './components/ItemShow';
import Form from './components/Form';
import Draft from './components/Draft';
import ApplyForm from './components/ApplyForm';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <TopMenu />
          <Switch>
            <Route path="/about" component={App} />
            <Route path="/apply" component={ApplyForm} />
            <Route path="/ai" component={Draft} />
            <Route path="/items/new" component={Form} />
            <Route path="/items/:id" component={ItemShow} />
            <Route path="/" component={App} />
          </Switch>
      </div>
    </BrowserRouter>
  </Provider>

  ,document.getElementById('root'));
//registerServiceWorker();
