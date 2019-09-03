import React from 'react'
import { Component } from 'react'
import Weapon from './components/Weapon'

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

  weaponHierarchy(weapons) {
    const firstLevelWeaponIds = this.firstLevelWeaponIds(weapons);
    const result = firstLevelWeaponIds.map(rootWeapon => {
      const weapon = weapons.find(weapon => weapon.id === rootWeapon.id)
      if(weapon.crafting.branches.length > 0) {
        weapon.children = weapons.filter(nextWeapon => nextWeapon.crafting.previous && nextWeapon.crafting.previous === rootWeapon.id)
      }
      return weapon
    })

    return result
  }

  render() {
    return (
      <div>
        {this.state.weapons && this.state.weapons.map(weapon => (
          <div key={ weapon.id } style={{ display:'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '1em' }}>
              <Weapon weapon={ weapon } />
            </div>

            <div>
              {weapon.children.map(child => {
                return(
                  <Weapon key={ child.id } weapon={ child } />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Weapons;
