import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu';
import FrontPage from './components/FrontPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <div>
      <FrontPage />
      <Footer />
    </div>
    );
  }
}

export default App;
