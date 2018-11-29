import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './page/HomePage.js';
import NewsPage from './page/NewsPage.js';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import logo from './logo.svg';
import './App.css';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>     
            <div>
              <div className="jumbotron text-center">
                <Link to="/"><h1>My Nano TIA Page</h1></Link>
                <p>Please scroll to the infinity and beyond!</p>
              </div>
              <Switch>   
                <Route path="/article/:articleSlug" component={NewsPage} />
                <Route path="/" component={HomePage} />        
              </Switch>
            </div>
        </Router>      
      </Provider>
    );
  }
}

export default App;
