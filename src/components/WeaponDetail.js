import React from 'react'
import MaterialsList from './MaterialsList'

const WeaponDetail = ({ weapon }) => (
  <div className="weapon-detail">
    <div className="weapon-name">
      { weapon.name }
    </div>
    <div className="weapon-picture">
      <img src={ weapon.assets.image } />
    </div>
    <div className="weapon-upgrade-list" >
      <MaterialsList materials={ weapon.crafting.craftingMaterials } title="Craft" />
      <MaterialsList materials={ weapon.crafting.upgradeMaterials } title="Upgrade" />
    </div>
  </div>
)

export default WeaponDetail
