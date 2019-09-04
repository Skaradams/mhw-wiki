import React from 'react'
import { Component } from 'react'
import Weapon from '../components/Weapon'

import axios from 'axios'


class Weapons extends Component {
  state = {}
  async componentDidMount() {
    const weapons = await axios.get('https://mhw-db.com/weapons?q={"type": "great-sword"}')

    this.setState({
      weapons: this.weaponHierarchy(weapons.data)
    })
  }

  firstLevelWeaponIds(weapons) {
    return weapons.filter(weapon => weapon.crafting.previous === null)
  }

  addChildrenToWeapon(weapon, weapons) {
    if(weapon.crafting.branches.length > 0) {
      weapon.children = weapons.filter(nextWeapon =>
        nextWeapon.crafting.previous && nextWeapon.crafting.previous === weapon.id
      )
      weapon.children.map(subWeapon => this.addChildrenToWeapon(subWeapon, weapons))
    }
    return weapon
  }

  weaponHierarchy(weapons) {
    const firstLevelWeaponIds = this.firstLevelWeaponIds(weapons);
    const result = firstLevelWeaponIds.map(rootWeapon => {
      const weapon = weapons.find(weapon =>
        weapon.id === rootWeapon.id
      )
      const weaponTree = this.addChildrenToWeapon(weapon, weapons)
      return weaponTree
    })
    return result
  }

  render() {
    return (
      <div>
        { this.state.weapons && this.state.weapons.map(weapon => (
          <div key={ weapon.id } style={{ marginBottom: '3em' }} >
            <Weapon weapon={ weapon } />
          </div>
        ))}
      </div>
    )
  }
}

export default Weapons;
