import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Logo from "../assets/images/logo-maximiza.svg"

const Header = () => (
  <header>
    <div className="logo--header">
      <AniLink cover direction="right" duration={0.55} bg="#006648" to="/">
        <img src={Logo} alt="logo" />
      </AniLink>
    </div>
  </header>
)

export default Header
