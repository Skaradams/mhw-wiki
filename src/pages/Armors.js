import React from 'react'
import { Component } from 'react'
import axios from 'axios'

class Armors extends Component {
  RANK_LOW = 'low';
  RANK_HIGH = 'high';

  state = {
    rank: this.RANK_LOW
  }
  async componentDidMount() {
    const armorSets = await axios.get(
      `https://mhw-db.com/armor/sets?q={"rank": "${ this.state.rank }"}`
    );

    this.setState({
      armorSets: armorSets.data,
    })
  }

  render() {
    return (
      <div className="armors-page">
        { this.state.armorSets && this.state.armorSets.map(set => (
            <div className="armor-set" key={ set.id }>
              { set.name }
              <div className="armor-pieces">
                { set.pieces && set.pieces.map(piece => (
                  <div key={ piece.id }>
                    { piece.name }
                  </div>
                )) }
              </div>
            </div>
          )
        )}
      </div>
    )
  }
}

export default Armors;
