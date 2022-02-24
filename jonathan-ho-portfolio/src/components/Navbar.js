import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
        <h1>Jonathan Ho</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/art">Art</Link>
            <Link to="/experiments">Experiments</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
  )
}
