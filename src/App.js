import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu';
import FrontPage from './components/FrontPage';

class App extends Component {
  render() {
    return (
    <div>
      <TopMenu></TopMenu>
      <FrontPage />
      <Footer />
    </div>
    );
  }
}

export default App;
