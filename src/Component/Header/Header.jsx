/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../utilities/Icons/logo.svg";
import DisabledPortalPopup from "./Conectus";
import Cont from "./Cont";
import { Box } from "@mui/material";
export default function Header({ page }) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [popup,setpopup]=useState(false)
  useEffect(()=>{
 if(!isNavVisible){
  if(popup){
    setpopup(false)
  }
 }

  },[isNavVisible])
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
 
      <Cont open ={popup}/>

     
      <Link to={"/"}> 
      
      
      <img src={logo} className="Logo" alt="logo"  
      
      
      style={{
        '@media (max-width: 500px)': {
          display: "none"
        },
      }}
      />
       </Link>
      

      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={30}
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

          <HashLink to="/#industry">
            <a
              style={{
                color: window.location.href.includes("#industry")
                  ? "#2A4596"
                  : "",
              }}
            >
              Industries we serve
            </a>
          </HashLink>

          {/* <a
            style={{
              color: page == "industry" ? "#2A4596" : "",
            }}
          >
          </a> */}

          <Link to={"/aboutus"}>
            <a
              style={{
                color: page == "aboutus" ? "#2A4596" : "",
              }}
            >
              About us
            </a>
          </Link>
          <button
          
          onClick={()=>{
            setpopup(!popup)
          }}
          style={{
              
          overflow: "hidden",
          padding:"0px, 16px, 0px, 16px",
          borderRadius:"4px",
          fontFamily:"SF Pro Display",
          fontSize:"16px",
          fontWeight:"500"
       
          }}>Contact us</button>

          {/* <DisabledPortalPopup /> */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <MenuIcon />
      </button>
    </header>
  );
}
