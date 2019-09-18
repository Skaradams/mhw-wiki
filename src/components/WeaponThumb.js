import React from 'react'

const WeaponThumb = ({ weapon, changeSelected, selectedWeapon }) => (
  <div className="weapon-family">
    <div
      className="weapon-thumb"
      onClick={ () => { changeSelected(weapon) } }
    >
      <img
        src={ weapon.assets.icon }
        className={ (selectedWeapon === weapon ? 'active' : '') } />
    </div>
    <div>
      { weapon.children && weapon.children.map(child => {
        return(
          <WeaponThumb
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

export default WeaponThumb
