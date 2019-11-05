import React from 'react'

const ArmorDetail = ({ armor }) => (
  <div className="item-detail box">
    <div className="item-title">
      { armor.name }
    </div>
    <div className="item-picture">
      <img src={ armor.assets.imageMale } />
    </div>
  </div>
)

export default ArmorDetail;
