import React from 'react'
import { Component } from 'react'
import WeaponThumbTree from '../components/WeaponThumbTree'
import WeaponDetail from '../components/WeaponDetail'
import weaponTypesMapping from '../components/weaponTypesMapping'
import importAllFiles from '../utils/importAllFiles'
import {
  Tooltip
} from 'react-tippy';

import axios from 'axios'

class Weapons extends Component {
  state = {}
  async componentDidMount() {
    const weaponTypes = await axios.get('https://mhw-db.com/weapons?p={"type": true}');

    const uniqueTypes = weaponTypes.data
      .map(weapon => weapon.type)
      .reduce((unique, type) => unique.includes(type) ? unique : [...unique, type], [] );

    const selectedType = uniqueTypes[0];
    const weapons = await this.getWeapons(selectedType);

    this.setState({
      weapons: weapons,
      weaponTypes: uniqueTypes,
      selectedType: selectedType,
      selectedWeapon: weapons[0]
    })
  }

  async getWeapons(type) {
    const weapons = await axios.get(`https://mhw-db.com/weapons?q={"type": "${ type }"}`)
    return this.weaponHierarchy(weapons.data)
  }

  async refreshWeapons(type) {
    const weapons = await this.getWeapons(type);
    this.setState({
      weapons: weapons,
      selectedType: type,
      selectedWeapon: weapons[0]
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

  changeSelected = (weapon) => {
    this.setState({
      selectedWeapon: weapon
    })
  }

  render() {
    const typeImages = importAllFiles(
      require.context('../assets/images/weaponTypes', false, /.png/)
    );
    return (
      <div className='weapons-page'>
        <div className="weapon-types top-bar">
          { this.state.weaponTypes && this.state.weaponTypes.map(type => (
            <Tooltip
              key={ type }
              arrow="true"
              title={ weaponTypesMapping[type] }
              position="bottom"
              size="big"
              theme="light"
            >
              <div
                className={`weapon-type ${this.state.selectedType === type ? "active" : ""}`}
                onClick={ () => this.refreshWeapons(type) }
                >
                  <img
                    src={ typeImages[`icon-${type}.png`] }
                    alt={ weaponTypesMapping[type] }
                  />
                </div>
            </Tooltip>
          )) }
        </div>
        <div className="page-wrapper">
          <div className='weapons-pane box'>
            { this.state.weapons && this.state.weapons.map(weapon => (
              <div key={ weapon.id } style={{ marginBottom: '3em' }} >
                <WeaponThumbTree
                  weapon={ weapon }
                  changeSelected={ this.changeSelected }
                  selectedWeapon={ this.state.selectedWeapon }
                  />
              </div>
            ))}
          </div>
          <div className='selected-item-pane'>
            {
              this.state.selectedWeapon &&
              <WeaponDetail weapon={ this.state.selectedWeapon } />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Weapons;
