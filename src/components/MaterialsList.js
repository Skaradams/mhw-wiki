import React from 'react'

const MaterialsList = ({ materials, title }) => (
  <div className="materials-list">
    <h3 className="materials-list-title">
      { title }
    </h3>
    <ul>
      { materials.map(material => {
        return (
          <li key={material.item.id} className="row">
            <span className="item-name">
              { material.item.name }
            </span>
            <span className="item-quantity no-flex">
              { material.quantity }
            </span>
          </li>
        )
      })}
    </ul>
  </div>
)

export default MaterialsList
