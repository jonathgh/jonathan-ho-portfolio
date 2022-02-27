import React from "react"
import "../styles/global.css"
import Layout from "../components/Layout.js"
import SunsetShader from "../components/SunsetShader.js"

import Gallery from '../components/Gallery'


  const About = () => {
    return (
        <div className="top-level-div">
            <div className="container disable-select">
                <Layout />
                    <div className="page-top-center-text">
                        <div className="page-heading-title">
                            ABOUT
                        </div>
                        <div className="page-sub-heading">
                            A bit about me
                        </div>
                        
                        <div className="content-grid">
                            <h1>Bio</h1>
                            <p>
                                I was born in Los Angeles in 1994. Qui elit proident officia nostrud nostrud dolor eiusmod. Elit quis dolor amet enim occaecat ad sint occaecat aliquip eu labore dolore sunt amet. Mollit irure sit exercitation proident minim elit labore consectetur veniam anim.

Sit duis eiusmod voluptate aliquip dolore ullamco ad in anim. Irure excepteur id eu reprehenderit aliquip laborum laborum sit culpa. Dolor dolor magna ea laborum occaecat laboris minim. Irure excepteur sint mollit laborum voluptate occaecat nisi elit tempor nostrud ex. Officia non cupidatat officia laboris proident ea pariatur. Enim nostrud culpa ipsum ullamco nulla laboris. Nulla occaecat cillum incididunt voluptate ipsum Lorem velit ex laboris.

Culpa ad cupidatat occaecat occaecat sunt magna officia id do exercitation. Aute qui anim anim officia cupidatat reprehenderit. Quis velit dolore veniam elit exercitation consectetur nisi adipisicing. Nisi veniam nisi pariatur eiusmod nisi anim. Commodo reprehenderit reprehenderit ad eu excepteur elit pariatur in aliqua do. Minim nisi incididunt cupidatat nulla ex deserunt irure cillum voluptate esse. Est amet sit deserunt proident minim laboris laboris cupidatat eiusmod.
                            </p>
                        </div>
                    </div>
                    <SunsetShader />   
            </div>
        </div>
    )
  }
  
  export default About