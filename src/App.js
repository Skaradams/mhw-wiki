import React from 'react'
import {Component} from 'react'
import Weapons from './weapons'

class App extends Component {
  render() {
    return (
      <div className="mhw-app">
        <Weapons />
      </div>
    );
  }
}

export default App;
