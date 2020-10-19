import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fas)

const empresaBalances = () => (
  <section className="balances">
    <h2>Balances mensuales</h2>
    <div className="balances__grupo">
      <h3 className="balances__subtitulo">Año 2020</h3>
      <ul className="balances__lista">
        <li className="balances__item">
          <button className="balances__boton">
            <FontAwesomeIcon icon={["fas", "download"]} fixedWidth size="1x" />
            Julio
          </button>
        </li>
        <li className="balances__item">
          <button className="balances__boton">
            <FontAwesomeIcon icon={["fas", "download"]} fixedWidth size="1x" />
            Agosto
          </button>
        </li>
        <li className="balances__item">
          <button className="balances__boton">
            <FontAwesomeIcon icon={["fas", "download"]} fixedWidth size="1x" />
            Septiembre
          </button>
        </li>
        <li className="balances__item">
          <button className="balances__boton">
            <FontAwesomeIcon icon={["fas", "download"]} fixedWidth size="1x" />
            Octubre
          </button>
        </li>
        <li className="balances__item">
          <button className="balances__boton">
            <FontAwesomeIcon icon={["fas", "download"]} fixedWidth size="1x" />
            Noviembre
          </button>
        </li>
        <li className="balances__item">
          <button className="balances__boton">
            <FontAwesomeIcon icon={["fas", "download"]} fixedWidth size="1x" />
            Diciembre
          </button>
        </li>
      </ul>
    </div>
  </section>
)

export default empresaBalances
