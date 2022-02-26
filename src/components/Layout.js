import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content"></div>
      <footer>
        {/* <p className="copyright">Copyright 2022 Jonathan Ho</p> */}
      </footer>
    </div>
  )
}
