import React from 'react'

const ItemThumb = ({ item, changeSelected, selectedItem, icon }) => (
  <div
    className="item-thumb"
    onClick={ () => { changeSelected(item) } }
  >
    <img
      src={ item.assets && item.assets.icon || icon }
      className={ (selectedItem === item ? 'active' : '') }
    />
  </div>
)

export default ItemThumb;
