import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Box, Button, Typography } from "@mui/material";
import ProductBox from "./ProductBox";
import { dataArr } from "./proData";
import Horizontalscroll from "./Scroll";
import Menu from "./sc";
import Sc from "./sc";
import { HashLink } from "react-router-hash-link";
import ContectProduct from "./ContectProduct";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Footer from "../Footer/Footer";
import "./product.css"

export default function Products() {
  const [currentState, setCurrentState] = useState("prod0");
  const [prevState, setPrevState] = useState("prod0");
  const init = [
    "Cooling tower chemicals",
    "Boiler Chemicals",
    "AHU Descaling Chemicals",
    "Descaling Chemicals",
    "Chiller Tower Chemicals",
    "Fireside Additives",
    "R.O. Antiscalants and Cleaners",
  ];
  const [buttonData, setButtonData] = useState(init);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    // document.getElementById("keyfacts").style.display = "none";
    // document.getElementById("product1").style.visibility = "hidden";
    // document.getElementById("product23").style.display = "none";

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // console.log(sectionHeight, sectionTop, window.pageYOffset);
        if (window.pageYOffset >= sectionTop - sectionHeight + 100) {
          current = section.getAttribute("id");
        }
      });
      if (current) {
        setCurrentState((prev) => {
          setPrevState(prev.split("prod")[1]);
          // let ele = document.getElementById(prev);
          // ele.scrollIntoView({
          //   behavior: "smooth",
          // });
          return current;
        });

        console.log(current);
        // setCurrents((prev) => ({ ...prev, [current]: current }));
      }
      // if (current == "keyfacts") {
      //   document.getElementById("keyfacts").style.display = "";
      // }
      // if (current == "product1") {
      //   document.getElementById("product1").style.visibility = "";
      // }
      // if (current == "product23") {
      //   console.log("product 23");
      //   document.getElementById("product23").style.display = "";
      // }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };
  return (
    <div
      style={{
        background: "#F7F7FB",
      }}
    >
      <Header page={"product"} />

      <Box
        sx={{
          height: "80px",

          display: "flex",

          background: "#F7F7FB",
          position: "sticky",
          top: "60px",
          mt: "70px",
          zIndex: 400,
          justifyContent: "center",
        }}
      >
        <Sc currentState={currentState} prevState={prevState}>
          {buttonData?.map((el, index) => (
            <Box
              sx={{
                minWidth: "20vw",
              }}
            >
              {" "}
              {/* <Link
                to={`prod${index}`}
                marginHeight={100}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Button
                  sx={{
                    background: currentState == "prod" + index ? "#2A4596" : "",

                    color:
                      currentState == "prod" + index ? "#FFFFFF" : "#636366",
                    ":hover": {
                      background: "",
                    },
                  }}
                  onClick={() => {
                    console.log(el);
                    // setCurrentState("prod" + index);

                    setCurrentState((prev) => {
                      setPrevState(prev.split("prod")[1]);
                      return "prod" + index;
                    });
                  }}
                >
                  {" "}
                  <Typography variant="button"> {el}</Typography>
                </Button>{" "}
              </Link> */}
              <HashLink to={`/Products#prod${index}`}>
                <Button
                  sx={{
                    background: currentState == "prod" + index ? "#2A4596" : "",
                    scrollBehavior: "smooth",
                    color:
                      currentState == "prod" + index ? "#FFFFFF" : "#636366",
                    ":hover": {
                      background:
                        currentState == "prod" + index ? "#2A4596" : "",
                    },
                  }}
                  onClick={() => {
                    console.log(el);

                    setCurrentState((prev) => {
                      setPrevState(prev.split("prod")[1]);
                      return "prod" + index;
                    });
                  }}
                >
                  {" "}
                  <Typography variant="button"  sx={{

'@media(max-Width: 700px)' : {
  fontSize:"12px",
  
     
    },
                  }} > {el}</Typography>
                </Button>{" "}
              </HashLink>
            </Box>
          ))}
        </Sc>
      </Box>
      <Box>
        {/* {dataArr?.map((el, index) => (
          <section id={"prod" + index}>
            <ProductBox data={el} index={index} />
          </section>
        ))} */}
        {dataArr?.map((el, index) => (
          <Element name={"prod" + index}>
            <section
              id={"prod" + index}
              className="productBoxForPro"
              // style={{
              //   height: "65vh",
              //   paddingTop: "100px",
              //   scrollBehavior: "smooth",
              //   marginBottom: "-30px",
              //  "@media(max-width: 700px)" : {
              //     // width: "100%",
              //     height: "",
              //     marginBottom: "0px",
              //     border:"1px solid red"
                 
              //   },
              // }}
            >
              {currentState == "prod0" && index == 0 && (
                <Box
                  sx={{
                    width: "90vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                    mt: "20px",
                    mb: "30px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#3D3D3D",
                      fontSize: "22px",
                      textAlign: "center",
                      fontWeight: 400,
                    }}
                  >
                    <span
                      style={{
                        color: "#2C2C2E",
                        fontSize: "22px",
                        fontWeight: 600,

                        '@media(max-width: 700px)' : {
                        
                          fontSize: "18px",
                        }
                      }}
                    >
                      Welcome to PDWT Chemicals –
                    </span>
                    your trusted partner for water treatment solutions in
                    industrial systems. Our specialized chemicals ensure
                    trouble-free operation, efficiency, and equipment lifespan
                    extension.
                  </Typography>
                </Box>
              )}
              <ProductBox data={el} index={index} />
            </section>
          </Element>
        ))}
      </Box>

      <Box>
        <ContectProduct />
      </Box>
      <Footer />
    </div>
  );
}
