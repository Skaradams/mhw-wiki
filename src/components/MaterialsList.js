import React from 'react'

const MaterialsList = ({ materials, title }) => (
  <div className="materials-list">
    <h3>
      { title }
    </h3>
    <ul>
      { materials.map(material => {
        return (
          <li key={material.item.id}>
            { material.item.name } x { material.quantity }
          </li>
        )
      })}
    </ul>
  </div>
)

export default MaterialsList
