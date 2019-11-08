import React from 'react'
import MaterialsList from './MaterialsList'


const WeaponDetail = ({ weapon }) => {
  const craftMaterials = weapon.crafting.craftingMaterials && weapon.crafting.craftingMaterials.length > 0 &&
    <MaterialsList materials={ weapon.crafting.craftingMaterials } title="Craft Materials" />
  const upgradeMaterials = weapon.crafting.upgradeMaterials && weapon.crafting.upgradeMaterials.length > 0 &&
    <MaterialsList materials={ weapon.crafting.upgradeMaterials } title="Upgrade Materials" />
  const SHARPNESS_COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "white"
  ]
  const handicraftLevel = 0;
  return (
    <div className="item-detail box row">
      <div className="item-detail-general">
        <h2 className="item-title">
          { weapon.name }
        </h2>

        <div className="item-picture">
          <img src={ weapon.assets.image } />
        </div>
        <div className="item-upgrade-list" >
          { craftMaterials }
          { upgradeMaterials }
        </div>
      </div>
      <div className="item-detail-stats">
        <div>
          Rarity { weapon.rarity }
        </div>
        <div>
          Attack { weapon.attack.display }
        </div>
        Sharpness { SHARPNESS_COLORS.map(color => (
          <span>{ weapon.durability[handicraftLevel][color] }</span>
        ))}
      </div>
    </div>
  )
}

export default WeaponDetail;
