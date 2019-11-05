import React from 'react'
import {
  Tooltip
} from 'react-tippy';

const ItemThumb = ({ item, changeSelected, selectedItem, icon }) => (
  <div
    className="item-thumb"
    onClick={ () => { changeSelected(item) } }
  >
    <Tooltip
      key={ item.id }
      arrow="true"
      title={ item.name }
      position="bottom"
      size="small"
      theme="light"
    >
      <img
        src={ item.assets && item.assets.icon || icon }
        className={ (selectedItem === item ? 'active' : '') }
      />
    </Tooltip>
  </div>
)

export default ItemThumb;
