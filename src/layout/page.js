import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "../assets/scss/layout/default.scss";

const Page = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    const nav = document.getElementById("myNav");
    const main = document.querySelector("main");

    if (!isToggled) {
      nav.style.width = "50%";
      main.style.opacity = 0.3;
      setIsToggled(true);
    } else {
      nav.style.width = "0";
      main.style.opacity = 1;
      setIsToggled(false);
    }
  };

  return (
    <div className="contenedor">
      <button className="mobileMenu" onClick={toggleMenu}>
        ☰
      </button>
      <Header estilo="header__logo-interno"/>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
