import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const aliadosLogos = () => (
  <StaticQuery
    query={graphql`
      query {
        morgan: file(relativePath: { eq: "aliados-morgan-stanley.png" }) {
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oppenheimer: file(relativePath: { eq: "alidos-oppenheimer.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vitral: file(relativePath: { eq: "aliados-vitral.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intesa: file(relativePath: { eq: "aliados-intesa-sanpaolo.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        silk: file(relativePath: { eq: "aliados-silk.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        suisse: file(relativePath: { eq: "aliados-credit-suisse.png" }) {
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <ul className="aliados__carrusel">
        <li className="aliados__carrusel-item">
          <Img fluid={data.morgan.childImageSharp.fluid} />
        </li>
        <li className="aliados__carrusel-item">
          <Img fluid={data.intesa.childImageSharp.fluid} />
        </li>
        <li className="aliados__carrusel-item">
          <Img fluid={data.vitral.childImageSharp.fluid} />
        </li>
        <li className="aliados__carrusel-item">
          <Img fluid={data.suisse.childImageSharp.fluid} />
        </li>
        <li className="aliados__carrusel-item">
          <Img fluid={data.oppenheimer.childImageSharp.fluid} />
        </li>

        <li className="aliados__carrusel-item">
          <Img fluid={data.silk.childImageSharp.fluid} />
        </li>
      </ul>
    )}
  />
)
export default aliadosLogos
