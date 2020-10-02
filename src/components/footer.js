import React from "react"

// const Footer = () => (
//   <footer
//     style={{
//       marginTop: `2rem`,
//     }}
//   >
//     © {new Date().getFullYear()}, Todos los derechos reservados
//     {` `}
//     <a href="http://www.novanetstudio.com">Novanet</a>
//   </footer>
// )

const Footer = () => (
  <footer className="contenedor">
    <ul>
      <li>
        <span>Ins</span>
      </li>
      <li>
        <span>Lin</span>
      </li>
      <li>
        <span>Twi</span>
      </li>
    </ul>
    <p>
      © {new Date().getFullYear()} Maximiza Casa de Bolsa - Derechos reservados
      | Diseñado por: <img src="" alt="novanet" />
    </p>
  </footer>
)

export default Footer
