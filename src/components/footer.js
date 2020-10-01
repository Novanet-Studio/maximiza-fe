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
  <footer>
    <ul>
      <li>Instagram</li>
      <li>LinkedIn</li>
      <li>Twitter</li>
    </ul>
    <p>© {new Date().getFullYear()} Maximiza Casa de Bolsa - Derechos reservados | Diseñado por: <img src="" alt="novanet"/></p>
  </footer>
)

export default Footer