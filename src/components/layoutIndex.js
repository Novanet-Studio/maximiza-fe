import React, { useState } from "react"
import PropTypes from "prop-types"
import HeaderIndex from "./headerIndex"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleMenu = () => {
    const nav = document.querySelector("#myNav")
    const main = document.querySelector("main")

    console.log("It works toggle? (layoutIndex) ", isToggled)

    console.log("-".repeat(30))
    console.log({
      nav,
      main,
      toggle: isToggled,
    })

    if (!isToggled) {
      nav.style.width = "50%"
      main.style.opacity = 0.3
      setIsToggled(true)
      console.log("Menu is open (LaIx)")
    } else {
      nav.style.width = "0%"
      main.style.opacity = 1
      console.log("Menu is close (LaIx)")
      setIsToggled(false)
    }

    console.log("end layoutIndex")
    console.log("-".repeat(30))
  }

  return (
    <div className="contenedor">
      <button className="mobileMenu" onClick={toggleMenu}>
        ☰
      </button>
      <HeaderIndex />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
