/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import HeaderInterno from "./headerInterno"
import Footer from "./footer"

const LayoutInterno = ({ children }) => (
  <div className="contenedor">
    <HeaderInterno />
    <main>{children}</main>
    <Footer />
  </div>
)

LayoutInterno.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutInterno
