import React from 'react'

const ArmorDetail = ({ armor }) => (
  <div className="armor-detail box">
    <div className="armor-name">
      { armor.name }
    </div>
    <div className="armor-picture">
      <img src={ armor.assets.imageMale } />
    </div>
  </div>
)

export default ArmorDetail;
