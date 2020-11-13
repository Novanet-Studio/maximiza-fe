import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const linkActivo = {
  fontWeight: 700,
  color: "#00735f",
}

const linkStyles = {}

const LinkNav = ({ text, direction = "right", to = "/" }) => (
  <AniLink
    className="nav__link"
    cover
    direction={direction}
    duration={0.55}
    bg="#006648"
    to={to}
    getProps={({ isPartiallyCurrent }) =>
      isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null
    }
  >
    {text}
  </AniLink>
)

export default LinkNav
