import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../assets/scss/components/footer.scss";
// add fas and fab to the library
library.add(fab, fas);

/* eslint-disable */
let faicon = null;
let faprefix = null;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      strapiContacto {
        info_contacto {
          id
          icono
          prefijo
          vinculo
          contenido
        }
      }
      logonn: file(relativePath: { eq: "logo-nn.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <footer className="footer">
      <ul className="footer__grupo-rrss">
        {data.strapiContacto.info_contacto.map(
          (document) => (
            <li className="footer__rrss" key={document.id}>
              <a
                href={document.vinculo}
                className="footer__link"
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
          )
        )}
      </ul>
      <p className="footer__derechos">
        © {new Date().getFullYear()} Maximiza Casa de Bolsa - Derechos
        reservados | Diseñado por:{" "}
        <img
          className="footer__imagen"
          src={data.logonn.publicURL}
          alt="Logo Novanet Studio"
        />
      </p>
    </footer>
  );
};

export default Footer;
