import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fab, fas)

/* eslint-disable */

let faicon = null
let faprefix = null

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        strapiContacto {
          info_contacto {
            icono
            id
            prefijo
            vinculo
            contenido
          }
        }
        logonn: file(relativePath: { eq: "logo-nn.svg" }) {
          publicURL
        }
      }
    `}
    render={(data) => (
      <footer>
        <ul className="footer__rrssbtn">
          {data.strapiContacto.info_contacto.map((document) => (
            <li>
              <a
                key={document.id}
                href={document.vinculo}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`Ir a ${document.contenido}`}
              >
                <FontAwesomeIcon
                  icon={[
                    (faprefix = document.prefijo.replace(/'/g, "")),
                    (faicon = document.icono.replace(/'/g, "")),
                  ]}
                  fixedWidth
                  size="1x"
                />
              </a>
            </li>
          ))}
        </ul>
        <p>
          © {new Date().getFullYear()} Maximiza Casa de Bolsa - Derechos
          reservados | Diseñado por: <img src={data.logonn.publicURL} />
        </p>
      </footer>
    )}
  />
)

export default Footer
