import React from "react"
// import Layout from "../components/Layout"


export default function Home() {
  return (
    <div>
      <section>
        <div id="container" className="disable-select">
          <canvas id="c"></canvas>
          <div id="overlay">
            <div className="headingTitle">JONATHAN HO</div>
            <div className="subheading">
              Creative Technologist | VFX Artist | Sound Designer
            </div>
            
            
            
            <footer id="footer">
              <ul className="menu-items">
                <li className="menu-item menu-work" data-link="work">
                  work
                </li>
                <li
                  className="menu-item menu-prototypes"
                  data-link="prototypes"
                >
                  prototypes
                </li>
                <li className="menu-item menu-art" data-link="art">
                  art
                </li>
                <li className="menu-item menu-press" data-link="education">
                  education
                </li>
                <li className="menu-item menu-info" data-link="cv">
                  cv
                </li>
                <li className="menu-item menu-reel" data-link="reel">
                  reel
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </section>
    </div>
  )
}
