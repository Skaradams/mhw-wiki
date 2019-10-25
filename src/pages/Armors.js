import React from 'react'
import { Component } from 'react'
import axios from 'axios'

class Armors extends Component {
  state = {}
  async componentDidMount() {
    const armorSets = await axios.get('https://mhw-db.com/armor/sets');

    this.setState({
      armorSets: armorSets.data,
    })
  }

  render() {
    return (
      <div className="armors-page">
        { this.state.armorSets && this.state.armorSets.map(set => {
          return(
            <div key={ set.id }>
            { set.name }
            </div>
          )
        }) }
      </div>
    )
  }
}

export default Armors;
