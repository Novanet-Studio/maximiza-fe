import React from "react"

const openCity = (evt, cityName) => {
  // Declare all variables
  let i, tabcontent, tablinks

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block"
  evt.currentTarget.className += " active"
  if (cityName !== "Individual") {
    document.getElementById("Individual").style.display = "none"
  }
}

const serviciosRegistro = (e) => {
  return (
    <section classNameName="registro">
      <h2>Registros</h2>
      <div className="tab">
        <button className="tablinks" onClick={(e) => openCity(e, "Individual")}>
          Inversionista Individual
        </button>
        <button
          className="tablinks"
          onClick={(e) => openCity(e, "Institucional")}
        >
          Inversionista Institucional
        </button>
      </div>
      <div className="Informacion">
        <p>
          A fin de dar cumplimiento a las Normas dictadas por la SNV, relativas
          a la información que los clientes deben suministrar a los Operadores
          de Valores Autorizados, deben completarse las planillas necesarias
          para la apertura de cuenta de corretaje bursátil. En tal sentido, debe
          leerse el «Contrato de Cuenta de Corretaje Bursátil» y descargarse las
          Planillas de Identificación del Inversor (Aceptación del Contrato),
          Ficha de Registro de Firmas, Declaración Jurada dirigida a la SNV y
          Poder apertura y manejo de cuenta custodia.
        </p>
        <p>
          Es importante llenar correctamente las siguientes planillas y
          enviarlas a Maximiza Casa de Bolsa, junto con los recaudos.
        </p>
        <h4>
          Demandantes u oferentes residenciados en el territorio venezolano
        </h4>
        <p>
          ✓ Persona Natural Demandantes u oferentes residenciados en el
          territorio de la República Bolivariana de Venezuela.
        </p>
        <h4>Oferentes no residenciados en territorio venezolano</h4>
        <p>
          ✓ Persona Natural Oferentes no residenciados en el territorio de la
          República Bolivariana de Venezuela.
        </p>
        <h4>Requisitos comunes</h4>
        <p>Archivos a descargar:</p>
      </div>
      <div id="Individual">
        <h3>Inversionista Individual</h3>
        <ul className="registro__lista--archivos">
          <li>
            <a href="/servicios">
              Adjunto Ficha Única del Inversionista Persona natural
            </a>
          </li>
          <li>
            <a href="/servicios">Adjunto Ficha de Registro de Firmas</a>
          </li>
          <li>
            <a href="/servicios">
              Adjunto Declaración Jurada dirigida a la Superintendencia Nacional
              de Valores
            </a>
          </li>
          <li>
            <a href="/servicios">Adjunto Poder y Apertura de Manejo Cuenta Custodia</a>
          </li>
          <li>
            <a href="/servicios">
              Planilla de Registros para crear sub-cuenta en la Caja Venezolana
              de Valores
            </a>
          </li>
        </ul>
      </div>
      <div id="Institucional" className="tabcontent">
        <h3>Inversionista Institucional</h3>
        <ul className="registro__lista--archivos">
          <li>
            <a href="/servicios">
              Adjunto Ficha Única del Inversionista Persona Jurídica
            </a>
          </li>
          <li>
            <a href="/servicios">Adjunto Ficha de Registro de Firmas</a>
          </li>
          <li>
            <a href="/servicios">
              Adjunto Declaración Jurada dirigida a la Superintendencia Nacional
              de Valores
            </a>
          </li>
          <li>
            <a href="/servicios">Adjunto Poder y Apertura de Manejo Cuenta Custodia</a>
          </li>
          <li>
            <a href="/servicios">
              Planilla de Registros para crear sub-cuenta en la Caja Venezolana
              de Valores
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default serviciosRegistro
