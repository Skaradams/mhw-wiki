import React from 'react';
import {Component} from 'react';

import axios from 'axios'


class App extends Component {
  state = {}
  async componentDidMount() {
    const weapon = await axios.get('https://mhw-db.com/weapons/1')
    this.setState({
      weapon: weapon.data
    })
  }

  render() {
    return (
      <div className="mhw-app">
        {this.state.weapon && this.state.weapon.name}
      </div>
    );
  }
}

export default App;
