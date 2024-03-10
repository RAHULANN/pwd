/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../utilities/Icons/logo.svg";
export default function Header({ page }) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />

      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to={"/"}>
            {" "}
            <a
              style={{
                color: page == "Home" ? "#2A4596" : "",
              }}
            >
              Home
            </a>
          </Link>
          <Link to={"/Products"}>
            {" "}
            <a
              style={{
                color: page == "product" ? "#2A4596" : "",
              }}
            >
              Products
            </a>
          </Link>

          <HashLink to="/#industry">Industries we serve</HashLink>

          {/* <a
            style={{
              color: page == "industry" ? "#2A4596" : "",
            }}
          >
          </a> */}

          <a href="/">About us</a>
          <button>Contact us</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <MenuIcon />
      </button>
    </header>
  );
}
