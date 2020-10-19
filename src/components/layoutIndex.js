import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import HeaderIndex from "./headerIndex"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false)

  // Opcion nro 1
  // useEffect(() => {
  //   const onToggleMenu = () => {
  //     const nav = document.querySelector("#myNav")
  //     const main = document.querySelector("main")

  //     if (!isToggled) {
  //       nav.style.width = "50%"
  //       main.style.opacity = 0.3
  //       setIsToggled(true)
  //     } else {
  //       nav.style.width = "5"
  //       main.style.opacity = 1
  //       setIsToggled(false)
  //     }
  //   }

  //   document.querySelector('.mobileMenu').addEventListener("click", onToggleMenu)

  //   // Limpia | remueve el listener
  //   return () => 
  //     document
  //       .querySelector(".mobileMenu")
  //       .removeEventListener("click", onToggleMenu)
  // })

  // Si la opcion nro 1 no funciona
  // descomenta las siguientes lineas
  const toggleMenu = () => {
    const nav = document.querySelector('#myNav')
    const main = document.querySelector("main")

    console.log('It works toggle? (layoutIndex) ', isToggled)

    console.log('-'.repeat(30))
    console.log({
      nav,
      main,
      toggle: isToggled
    })

    if (!isToggled) {
      nav.style.width = "50%"
      main.style.opacity = 0.3
      setIsToggled(true)
      console.log('Menu is open (LaIx)')
    } else {
      nav.style.width = "0%"
      main.style.opacity = 1
      console.log('Menu is close (LaIx)')
      setIsToggled(false)
    }

    console.log('end layoutIndex')
    console.log('-'.repeat(30))
  }

  return (
    <div className="contenedor">
      {/* Siguiente linea funciona con la opcion nro 1 (useEffect) */}
      {/* <button className="mobileMenu">
        ☰
      </button> */}

      {/* Esta manera funciona con la opcion nro 2 (callback) */}
      {/* NOTA! Borra las lineas de codigo que no se usen */}
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
