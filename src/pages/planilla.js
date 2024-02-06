import React from "react";
import Logo from "../assets/images/logo-maximiza.svg";
import Seo from "../components/seo";
import "../assets/scss/pages/planilla.scss";
import LegalEntityFormPdf from "../components/legalEntityFormPdf";

const Planilla = ({ data }) => {
  return (
    <section className="principal">
      <LegalEntityFormPdf />
    </section>
  );
};

export default Planilla;

export const Head = () => (
  <Seo
    title="Maximiza registro de planilla"
    description="Rellena tu planilla de una manera sencilla"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_servicios_miniatura_98daf48fa5.webp"
  />
);
