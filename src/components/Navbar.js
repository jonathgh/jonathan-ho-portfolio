import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
        {/* <h1 className='website-title'>Jonathan Ho</h1> */}
        <div className="nav-links">
            <Link className='nav-link' to="/">HOME</Link>
            <Link className='nav-link' to="/work">WORK</Link>
            <Link className='nav-link' to="/art">ART</Link>
            <Link className='nav-link' to="/experiments">EXPERIMENTS</Link>
            <Link className='nav-link' to="/about">ABOUT</Link>
        </div>
    </nav>
  )
}
