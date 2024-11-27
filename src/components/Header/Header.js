import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="header">
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <p>TOP</p>
        <p>VISION</p>
        <p>MESSAGE</p>
        <p>SERVICE</p>
        <p>STORY</p>
        <p>PROFILE</p>
      </nav>
    </section>
  );
};

export default Header;
