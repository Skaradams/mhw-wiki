import React from 'react'
import { Component } from 'react'
import axios from 'axios'

import ItemThumb from '../components/ItemThumb';

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
      selectedArmor: armorSets[0]
    })
  }
  changeSelected = () => {

  }

  render() {
    return (
      <div className="armors-page">
        { this.state.armorSets && this.state.armorSets.map(set => (
            <div className="armor-set" key={ set.id }>
              { set.name }
              <div className="armor-pieces">
                { set.pieces && set.pieces.map(piece => (
                  <ItemThumb
                    key={ piece.id }
                    item={ piece }
                    changeSelected={ this.changeSelected }
                    selectedItem={ this.state.selectedArmor }
                    
                  />
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
