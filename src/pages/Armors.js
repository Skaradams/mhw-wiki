import React from 'react'
import { Component } from 'react'
import axios from 'axios'

import headIcon from '../assets/images/armorPieces/head.png';
import chestIcon from '../assets/images/armorPieces/chest.png';
import glovesIcon from '../assets/images/armorPieces/gloves.png';
import legsIcon from '../assets/images/armorPieces/legs.png';
import waistIcon from '../assets/images/armorPieces/waist.png';
import ItemThumb from '../components/ItemThumb';

class Armors extends Component {
  RANK_LOW = 'low';
  RANK_HIGH = 'high';
  ICONS = {
    head: headIcon,
    chest: chestIcon,
    gloves: glovesIcon,
    legs: legsIcon,
    waist: waistIcon
  }
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
      <div className="armors-page page-wrapper">
        <div className="box armors-wrapper">
          { this.state.armorSets && this.state.armorSets.map(set => (
            <div className="armor-set" key={ set.id }>
              <div className="armor-set-name">
                { set.name }
              </div>
              <div className="armor-pieces">
                  { set.pieces && set.pieces.map(piece => (
                    <ItemThumb
                      key={ piece.id }
                      item={ piece }
                      changeSelected={ this.changeSelected }
                      selectedItem={ this.state.selectedArmor }
                      icon={ this.ICONS[piece.type] }
                    />
                  )) }
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Armors;
