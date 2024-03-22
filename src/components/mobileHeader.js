import React from "react";
import "../styles/mobileHeader.css";

const Header = ({ logo }) => {
  return (
    <header className="mobile-header">
      <img src={logo} alt="Logo" className="corner-image" />
    </header>
  );
};

export default Header;
