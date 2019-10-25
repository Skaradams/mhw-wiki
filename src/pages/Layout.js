import React from 'react'
import { Router, Link } from 'react-router-dom'

const Layout = ({ children }) => (
  <div className="layout">
    <div className="side-menu">
      <Link className="menu-item" to="/weapons">
        Weapons
      </Link>
      <Link className="menu-item" to="/armors">
        Armors
      </Link>
    </div>
    <div className="content-wrapper">
      { children }
    </div>
  </div>
)

export default Layout;
