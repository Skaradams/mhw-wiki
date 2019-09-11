import React from 'react'

const WeaponThumb = ({ weapon }) => (
  <div className="weapon-family">
    <div className="weapon-thumb">
      <img src={ weapon.assets.icon } />
    </div>
    <div>
      { weapon.children && weapon.children.map(child => {
        return(
          <WeaponThumb key={ child.id } weapon={ child } />
        )
      })}
    </div>
  </div>
)

export default WeaponThumb
