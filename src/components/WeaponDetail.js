import React from 'react'
import MaterialsList from './MaterialsList'

const WeaponDetail = ({ weapon }) => (
  <div className="item-detail box">
    <div className="item-title">
      { weapon.name }
    </div>
    <div className="item-picture">
      <img src={ weapon.assets.image } />
    </div>
    <div className="item-upgrade-list" >
      <MaterialsList materials={ weapon.crafting.craftingMaterials } title="Craft" />
      <MaterialsList materials={ weapon.crafting.upgradeMaterials } title="Upgrade" />
    </div>
  </div>
)

export default WeaponDetail;
