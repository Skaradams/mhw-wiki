import React from 'react'
import ItemThumb from './ItemThumb';

const WeaponThumbTree = ({ weapon, changeSelected, selectedWeapon }) => (
  <div className="weapon-family">
    <ItemThumb item={ weapon } changeSelected={ changeSelected } selectedItem={ selectedWeapon } />

    <div>
      { weapon.children && weapon.children.map(child => {
        return(
          <WeaponThumbTree
            key={ child.id }
            weapon={ child }
            changeSelected={ changeSelected }
            selectedWeapon={ selectedWeapon }
          />
        )
      })}
    </div>
  </div>
)

export default WeaponThumbTree
