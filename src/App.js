import React from 'react'
import { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Weapons from './pages/Weapons'

class App extends Component {
  render() {
    return (
      <div className="mhw-app">
        <Router>
          <Redirect exact from="/" to="weapons" />
        <Route path='/weapons' exact component={ Weapons } />
        </Router>
      </div>
    );
  }
}

export default App;
