import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Industry from "../Industry/Industry";
// import KeyFacts from "../KeyFacts/KeyFacts";
import yearImg from "../../utilities/Icons/year.png";
import homeImg from "../../utilities/Icons/home.png";
import product1 from "../../utilities/Icons/product1.png";
import { Box, Button, Typography } from "@mui/material";
import "./Home.css";
import HomeProducts from "./HomeProducts";
import HomeProduct45 from "./HomeProduct45";
import HomeProduct67 from "./HomeProduct67";
import KeyFacts from "../KeyFacts/KeyFacts";
import Contectus from "../Contect/Contectus";
import ContactUsPopUp from "../Contect/PopUp";
export default function Home() {
  const [currents, setCurrents] = useState({
    home: "home",
  });

  const [contactUsPopUpState, setContactUsPopUpState] = useState(false);
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
        setCurrents((prev) => ({ ...prev, [current]: current }));
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
  console.log(currents);
  return (
    <div>
      <Header />
      <ContactUsPopUp
        open={contactUsPopUpState}
        onClose={() => {
          setContactUsPopUpState(false);
        }}
      />
      <div
        style={{
          marginTop: "90px",
        }}
      >
        {/* home page box */}
        {/* {JSON.stringify(currents.home)} */}
        {currents?.home && (
          <section
            id="home"
            style={{
              height: "700px",
              overflow: "hidden",
            }}
          >
            <Box className="homepagemainbox">
              <Box
                sx={{
                  justifyContent: "right",
                  display: "flex",
                  // border: "1px solid red",
                  width: "95%",
                  height: "50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0px",
                  }}
                >
                  <img src={yearImg} height="40px" alt="" />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#4493E9",
                    }}
                  >
                    {" "}
                    Year
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "80%",
                  alignContent: "center",
                  justifyItems: "center",
                  alignItems: "center",
                  margin: "auto",
                  textAlign: "center",
                  color: "#2C2C2E",
                }}
              >
                <Box>
                  <Typography variant="h3">
                    {" "}
                    Extend Equipment lifespan with our advanced Scaling And
                    Corrosion Inhibitors!
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "5vh",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: (theme) => theme.palette.primary.button,

                    color: "#FFFFFF",
                  }}
                  onClick={() => {
                    setContactUsPopUpState(true);
                  }}
                >
                  <Typography variant="button1">Get A Call Back</Typography>
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  // backgroundImage: `url(${homeImg})`,
                  height: "600px",
                  width: "100%",
                  mt: "-80px",
                }}
              >
                <img src={homeImg} width="100%" height="100%" alt="" />
              </Box>
            </Box>
          </section>
        )}
        {/* Producs */}
        <Box
          sx={{
            background: "#F3F2F6",
            width: "100%",
            pb: "50px",
          }}
        >
          <Box
            sx={{
              justifyContent: "start",
              padding: "30px",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography variant="h5"> Our Products</Typography>
          </Box>

          <section
            id="product1"
            style={{
              // height: "600px",
              height: currents?.product1 ? "" : "500px",
            }}
          >
            {currents?.product1 && (
              <Box
                className="product1home"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "5fr 5fr",
                  alignItems: "center",
                  height: "500px",
                  width: "90%",
                  justifyContent: "center",
                  alignContent: "center",
                  justifyItems: "center",
                  margin: "auto",
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  // border: "1px solid red",
                }}
              >
                <Box
                  sx={{
                    ml: "30px",
                  }}
                >
                  <Typography variant="subtitle1">
                    {" "}
                    Cooling tower chemicals
                  </Typography>

                  <Typography variant="body1">
                    {" "}
                    Our industry-leading{" "}
                    <span
                      style={{
                        color: "#2C2C2E",
                      }}
                    >
                      {" "}
                      scale inhibitors ensure peak efficiency ,
                    </span>{" "}
                    dispersing challenges and elevating your system to new
                    heights. Experience seamless operations with
                    <span
                      style={{
                        color: "#2C2C2E",
                      }}
                    >
                      our tailored solution for both utility and corporate
                      sectors.
                    </span>
                  </Typography>
                  <Box>
                    <Button
                      sx={{
                        background: "#FFFFFF",
                        mt: "10px",
                        color: "#3A3A3C",
                      }}
                    >
                      {" "}
                      <Typography variant="body1"> Read more</Typography>
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <img src={product1} alt="" />
                </Box>
              </Box>
            )}
          </section>
          <section
            id="product23"
            style={{
              height: currents?.product23 ? "" : "500px",
            }}
          >
            {currents?.product23 && <HomeProducts />}
          </section>
          <section
            id="product45"
            style={{
              height: currents?.product45 ? "" : "500px",
            }}
          >
            {currents?.product45 && <HomeProduct45 />}
          </section>
          <section
            id="product67"
            style={{
              height: "600px",
              // overflow: "hidden",

              height: currents?.product67 ? "" : "500px",
            }}
          >
            {currents?.product67 && <HomeProduct67 />}
          </section>
        </Box>

        <section id="industry">
          <Industry />
        </section>

        <section
          id="keyfacts"
          style={{
            height: currents?.keyfacts ? "" : "500px",
          }}
        >
          {currents?.keyfacts && <KeyFacts />}
        </section>

        <section
          id="contectus"
          style={{
            height: currents?.contectus ? "" : "500px",
          }}
        >
          {currents?.contectus && <Contectus />}
        </section>
      </div>
    </div>
  );
}
