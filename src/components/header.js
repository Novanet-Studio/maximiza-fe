import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "../assets/images/logo-maximiza.svg"
import "../assets/scss/components/header.scss"

const Header = ({ estilo }) => (
  <header className="header">
    <div className={estilo}>
      <AniLink cover direction="right" duration={0.55} bg="#006648" to="/">
        <img className="header__imagen" src={Logo} alt="logo" />
      </AniLink>
    </div>
  </header>
)

export default Header

