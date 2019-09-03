import React from 'react'

const Weapon = ({ weapon }) => (
  <div>
    <img src={ weapon.assets.icon } />
    {weapon.name}
  </div>
)

export default Weapon
