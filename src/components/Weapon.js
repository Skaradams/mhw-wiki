import React from 'react'

const Weapon = ({ weapon }) => (
  <div style={{ display:'flex', flexDirection: 'row' }}>
    <div style={{ marginRight: '1em' }}>
      <img src={ weapon.assets.icon } />
    </div>
    <div>
      { weapon.children && weapon.children.map(child => {
        return(
          <Weapon key={ child.id } weapon={ child } />
        )
      })}
    </div>
  </div>
)

export default Weapon
