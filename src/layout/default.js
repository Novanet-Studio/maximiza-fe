import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "../assets/scss/layout/default.scss";

const Default = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [navClass, setNavClass] = useState("nav--overlay-off");
  const [mainClass, setMainClass] = useState("opacity-off");

  const toggleMenu = () => {
    if (!isToggled) {
      setMainClass("opacity-on");
      setNavClass("nav--overlay-on");
      setIsToggled(true);
    } else {
      setMainClass("opacity-off");
      setNavClass("nav--overlay-off");
      setIsToggled(false);
    }
  };

  return (
    <div className="contenedor">
      <button className="mobileMenu" onClick={() => toggleMenu()}>
        ☰
      </button>
      <Header estilo="header__logo" />
      <Navigation estilo={navClass} />
      <main className={`${mainClass}`}>{children}</main>
      <Footer />
    </div>
  );
};

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
