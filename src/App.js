import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './page/HomePage.js';
import NewsPage from './page/NewsPage.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/article/:articleSlug" component={NewsPage} />
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>      
    );
  }
}

export default App;
