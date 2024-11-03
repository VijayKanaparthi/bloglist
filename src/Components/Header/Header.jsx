import { Link } from "react-router-dom"
import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="image-title-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="logo"
          />
        </div>
        <div>
          <h1>Wave</h1>
        </div>
      </div>
      <ul className="links-container">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="links">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
