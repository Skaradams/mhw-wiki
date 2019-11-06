import React from 'react'
import { Router, Link } from 'react-router-dom'
import logo from "../assets/images/mhw-logo.png";

const Layout = ({ children }) => (
  <div className="layout">
    <div className="side-menu">
      <img src={ logo } className="main-logo" />
      <Link className="menu-item" to="/weapons">
        <h1>
          Weapons
        </h1>
      </Link>
      <Link className="menu-item" to="/armors">
        <h1>
          Armors
        </h1>
      </Link>
    </div>
    <div className="content-wrapper">
      { children }
    </div>
  </div>
)

export default Layout;
