import React from 'react'

const WeaponDetail = ({ weapon }) => (
  <div className="weapon-detail">
    <div className="weapon-name">
      { weapon.name }
    </div>
    <div className="weapon-picture">
      <img src={ weapon.assets.image } />
    </div>
    <div className="weapon-upgrade-list" >
      <ul>
        { weapon.crafting.craftingMaterials.map(material => {
          return (
            <li key={material.item.id}>
              { material.item.name } x { material.quantity }
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default WeaponDetail
