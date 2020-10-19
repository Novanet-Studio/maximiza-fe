import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false)


  // Opcion nro 1
  useEffect(() => {
    const onToggleMenu = () => {
      const nav = document.querySelector('#myNav')
      const main = document.querySelector("main")

      if (!isToggled) {
        nav.style.width = "50%"
        main.style.opacity = 0.3
        setIsToggled(true)
      } else {
        nav.style.width = "0"
        main.style.opacity = 1
        setIsToggled(false)
      }
    }

    document.querySelector(".mobileMenu").addEventListener("click", onToggleMenu)

    // Clean up
    return () => 
      document
        .querySelector(".mobileMenu")
        .removeEventListener("click", onToggleMenu)
  })

  // Opcion nro 2
  // const toggleMenu = () => {
  //   const nav = document.getElementById("myNav")
  //   const main = document.querySelector("main")

  //   if (!isToggled) {
  //     nav.style.width = "50%"
  //     main.style.opacity = 0.3
  //     setIsToggled(true)
  //   } else {
  //     nav.style.width = "0"
  //     main.style.opacity = 1
  //     setIsToggled(false)
  //   }
  // }

  return (
    <div className="contenedor">
      {/* Funciona con la opcion 1 (useEffect) */}
      <button className="mobileMenu">
        ☰
      </button>

      {/* Opcion 2  */}
      {/* <button className="mobileMenu" onClick={toggleMenu}>
        ☰
      </button> */}
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
