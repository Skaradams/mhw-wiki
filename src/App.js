import React from 'react'
import { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import 'react-tippy/dist/tippy.css';

import Weapons from './pages/Weapons'
import Armors from './pages/Armors'
import Layout from './pages/Layout'


class App extends Component {
  render() {
    return (
      <div className="mhw-app">
        <Router>
          <Layout>
              <Route path='/armors' component={ Armors } />
              <Route path='/weapons' component={ Weapons } />
              {/* <Redirect exact from="/" to="weapons" /> */}
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
