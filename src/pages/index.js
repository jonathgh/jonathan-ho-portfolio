import React from "react"
import Layout from "../components/Layout"
//import ScriptTag from 'react-script-tag';

const scatterObj = props => (
  <ScriptTag type="text/javascript" src="./src/js/scatter.js" />
  )

export default function Home( { scatterObj }) {
  return (
      <div>
        <section>
        <div id="container" class="disable-select">
          <canvas id="c"></canvas>
          <div id="overlay">
            <div class="headingTitle">JONATHAN HO</div>
            <div class="subheading">
              Creative Technologist | VFX Artist | Sound Designer
            </div>
            <footer id="footer">
              <ul class="menu-items">
                <li class="menu-item menu-work" data-link="work">
                  work
                </li>
                <li class="menu-item menu-prototypes" data-link="prototypes">
                  prototypes
                </li>
                <li class="menu-item menu-art" data-link="art">
                  art
                </li>
                <li class="menu-item menu-press" data-link="education">
                  education
                </li>
                <li class="menu-item menu-info" data-link="cv">
                  cv
                </li>
                <li class="menu-item menu-reel" data-link="reel">
                  reel
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </section>


        <script type="module" src="./src/js/scatter.js"></script>
      </div>
      
  )
}
