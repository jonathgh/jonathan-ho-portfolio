import React from "react"
import "../styles/global.css"
import Layout from "../components/Layout.js"
import SunsetShader from "../components/SunsetShader.js"
import Gallery from '../components/Gallery'
import { WORK_IMAGES } from '../components/Gallery/constants/galleryImages'


  const Work = () => {
    return (
        <div className="top-level-div">
            <div className="container disable-select">
                <Layout />
                    <div className="page-top-center-text">
                        <div className="page-heading-title">
                            Work
                        </div>
                        <div className="page-sub-heading">
                            Client Projects
                        </div>
                        
                        <div className="content-grid">
                            <Gallery images={ WORK_IMAGES } />
                        </div>
                    </div>
                    <SunsetShader />   
            </div>
            <div className="background-clr"></div>
        </div>
    )
  }
  
  export default Work