import React from "react"
import "../styles/global.css"
import Layout from "../components/Layout.js"
import ContentItem from "../components/ContentItem"
import SunsetShader from "../components/SunsetShader.js"
import projectThumb01 from '../imgs/proj-thumb-01.jpg';


  const Work = () => {
    return (
        <div className="top-level-div">
            <div className="container disable-select">
                <Layout />
                    <div className="page-top-center-text">
                        <div className="page-heading-title">
                            WORK
                        </div>
                        <div className="page-sub-heading">
                            Client Projects
                        </div>
                        <div className="content-grid">
                            <ContentItem thumbSrc={projectThumb01} thumbAlt={"project thumbnail"} description={"Proident ullamco laborum reprehenderit anim cillum. Minim incididunt aliquip ipsum sunt qui eiusmod irure consectetur labore incididunt commodo elit adipisicing. Eiusmod cillum laborum laboris adipisicing do dolor sunt adipisicing occaecat id aliqua. Irure do voluptate minim reprehenderit. Ullamco cupidatat duis Lorem velit nisi aliqua est dolore ut excepteur id laborum anim adipisicing."} />
                            <ContentItem thumbSrc={projectThumb01} thumbAlt={"project thumbnail"} description={"Proident ullamco laborum reprehenderit anim cillum. Minim incididunt aliquip ipsum sunt qui eiusmod irure consectetur labore incididunt commodo elit adipisicing. Eiusmod cillum laborum laboris adipisicing do dolor sunt adipisicing occaecat id aliqua. Irure do voluptate minim reprehenderit. Ullamco cupidatat duis Lorem velit nisi aliqua est dolore ut excepteur id laborum anim adipisicing."} />
                            <ContentItem thumbSrc={projectThumb01} thumbAlt={"project thumbnail"} description={"Proident ullamco laborum reprehenderit anim cillum. Minim incididunt aliquip ipsum sunt qui eiusmod irure consectetur labore incididunt commodo elit adipisicing. Eiusmod cillum laborum laboris adipisicing do dolor sunt adipisicing occaecat id aliqua. Irure do voluptate minim reprehenderit. Ullamco cupidatat duis Lorem velit nisi aliqua est dolore ut excepteur id laborum anim adipisicing."} />
                            <ContentItem thumbSrc={projectThumb01} thumbAlt={"project thumbnail"} description={"Proident ullamco laborum reprehenderit anim cillum. Minim incididunt aliquip ipsum sunt qui eiusmod irure consectetur labore incididunt commodo elit adipisicing. Eiusmod cillum laborum laboris adipisicing do dolor sunt adipisicing occaecat id aliqua. Irure do voluptate minim reprehenderit. Ullamco cupidatat duis Lorem velit nisi aliqua est dolore ut excepteur id laborum anim adipisicing."} />
                        </div>
                    </div>
                    <SunsetShader />   
            </div>
        </div>
    )
  }
  
  export default Work