import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fab, fas)



const empresaBalances = () => (
    <section className="balances">
        <h2>Balances mensuales</h2>
        <div className="balances__grupo">
          <h3 className="balances__subtitulo">Año 2020</h3>
          <ul className="balances__lista">
            <li className="balances__item">
              <buttton className="balances__boton">
                <FontAwesomeIcon
                  icon={["fas", "download"]}
                  fixedWidth
                  size="1.5x"
                />
                Julio
              </buttton>
            </li>
            <li className="balances__item">
              <buttton className="balances__boton">
                <FontAwesomeIcon
                  icon={["fas", "download"]}
                  fixedWidth
                  size="1.5x"
                />
                Agosto
              </buttton>
            </li>
            <li className="balances__item">
              <buttton className="balances__boton">
                <FontAwesomeIcon
                  icon={["fas", "download"]}
                  fixedWidth
                  size="1.5x"
                />
                Septiembre
              </buttton>
            </li>
            <li className="balances__item">
              <buttton className="balances__boton">
                <FontAwesomeIcon
                  icon={["fas", "download"]}
                  fixedWidth
                  size="1.5x"
                />
                Octubre
              </buttton>
            </li>
            <li className="balances__item">
              <buttton className="balances__boton">
                <FontAwesomeIcon
                  icon={["fas", "download"]}
                  fixedWidth
                  size="1.5x"
                />
                Noviembre
              </buttton>
            </li>
            <li className="balances__item">
              <buttton className="balances__boton">
                <FontAwesomeIcon
                  icon={["fas", "download"]}
                  fixedWidth
                  size="1.5x"
                />
                Diciembre
              </buttton>
            </li>
          </ul>
        </div>
      </section>
)

export default empresaBalances