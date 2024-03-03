import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Box, Button, Typography } from "@mui/material";
import ProductBox from "./ProductBox";
import { dataArr } from "./proData";
import Horizontalscroll from "./Scroll";
import Menu from "./sc";
import Sc from "./sc";
import { HashLink } from "react-router-hash-link";

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
        if (window.pageYOffset >= sectionTop - sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      if (current) {
        setCurrentState((prev) => {
          setPrevState(prev.split("prod")[1]);
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
  return (
    <div>
      <Header page={"product"} />

      <Box
        sx={{
          height: "80px",

          display: "flex",

          position: "sticky",
          top: "80px",
          mt: "90px",

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
              <HashLink to={`/Products#prod${index}`}>
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
              </HashLink>
            </Box>
          ))}
        </Sc>
      </Box>
      {currentState == "prod0" && (
        <Box
          sx={{
            width: "95vw",
            marginLeft: "auto",
            marginRight: "auto",
            mt: "40px",
          }}
        >
          <Typography
            sx={{
              color: "#2C2C2E",
              fontSize: "22px",
              fontWeight: 400,
            }}
          >
            <span
              style={{
                color: "#2C2C2E",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              Welcome to PDWT Chemicals –
            </span>
            your trusted partner for water treatment solutions in industrial
            systems. Our specialized chemicals ensure trouble-free operation,
            efficiency, and equipment lifespan extension.
          </Typography>
        </Box>
      )}

      {dataArr?.map((el, index) => (
        <section id={"prod" + index}>
          <ProductBox data={el} index={index} />
        </section>
      ))}
    </div>
  );
}
