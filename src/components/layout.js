import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ children }) => {
  let isToggled = false
  const nav = document.getElementById("myNav")
  const main = document.querySelector("main")

  const toggleMenu = () => {
    if (!isToggled) {
      nav.style.width = "50%"
      main.style.opacity = 0.3
      isToggled = true
    } else {
      nav.style.width = "0%"
      main.style.opacity = 1
      isToggled = false
    }
    /* isToggled ? ((nav.style.width = "50%"), (isToggled = true)) : ((nav.style.width = "0%"), (isToggled = false)) */
  }
  return (
    <div className="contenedor">
      <button className="mobileMenu" onClick={() => toggleMenu()}>
        ☰
      </button>
      <Header />
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
