import React from "react"
import { Link } from 'gatsby'
import "../styles/three.css"
import AtmoScatterShader from "../components/AtmoScatterShader"


const App = () => {
  return (
    <div className="top-level-div">
        <div className="container disable-select">
            <div className="home-container">
                <div className="home-vert-center-text">
                    
                    <div className="heading-title">JONATHAN HO</div>
                    <div className="sub-heading">Creative Technologist | VFX Artist | Sound Designer</div>
                    <div className="links-home-footer">
                        <Link className="home-footer-link-item" to="/">HOME</Link>
                        <Link className="home-footer-link-item" to="/work">WORK</Link>
                        <Link className="home-footer-link-item" to="/art">ART</Link>
                        <Link className="home-footer-link-item" to="/experiments">EXPERIMENTS</Link>
                        <Link className="home-footer-link-item" to="/about">ABOUT</Link>
                    </div>
                </div>
                
                <AtmoScatterShader />

            </div>

        </div>
        <div className="background-clr"></div>
  </div>
    )
}

export default App
