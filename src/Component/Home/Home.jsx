import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Industry from "../Industry/Industry";
// import KeyFacts from "../KeyFacts/KeyFacts";

import homeImg from "../../utilities/Icons/home.png";
import product1 from "../../utilities/Icons/product1.png";
import product1mo from "../../utilities/Icons/product1mo.png";

import { Box, Button, Typography } from "@mui/material";
import "./Home.css";
import HomeProducts from "./HomeProducts";
import HomeProduct45 from "./HomeProduct45";
import HomeProduct67 from "./HomeProduct67";
import KeyFacts from "../KeyFacts/KeyFacts";
import Contectus from "../Contect/Contectus";
import ContactUsPopUp from "../Contect/PopUp";
import { Years } from "../../utilities/Icons/Icons";
import { useNavigate } from "react-router-dom";
import Abautus from "./Abautus";
import Footer from "../Footer/Footer";
export default function Home() {
  const [currents, setCurrents] = useState({
    home: "home",
  });
  const navigate = useNavigate();

  const [pageUpdate,setPageUpdate]=useState(false)
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
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

  return (
    <div>
      <Header page={"Home"} />
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
            className="homesectionone"
           
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
                  <Years />
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
                  <Typography variant="h3" sx={{
                 '@media (max-width: 500px)': {
                  fontSize:"34px"
                },
                  }}>
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
                    padding: "5px 40px 5px 40px",
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
                  '@media(max-width: 700px)' : {
                    height: "300px",
                  }
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
            margin:"auto"
         
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
            <Typography
              variant="h5"
              sx={{
                mt: "60px",
                ml: "50px",
                mb: "20px",

                '@media(max-width: 700px)' : {
                fontSize:"32px",
                ml: "5px",
                mt: "40px",

                }
              }}
            >
              {" "}
              Our Products
            </Typography>
          </Box>

          <section
            id="product1"
            style={{
              // height: "600px",
              height: currents?.product1 ? "" : "500px",

              '@media(max-width: 700px)' : {
              

                }
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
                  overflow: "hidden",

                  background: "#FFFFFF",
                  borderRadius: "24px",

                  '@media(max-width: 700px)' : {
              
                    gridTemplateColumns: "1fr",
                    width: "95%",
                    margin: "auto",
                    height: "auto",

                  }
                  // border: "1px solid red",
                }}
              >
                <Box
                  sx={{
                    ml: "70px",
                    mr: "-50px",
                    width: "100%",
                    '@media(max-width: 700px)' : {
                   
                     margin:"auto 20px auto 20px",
                     padding:"10px 20px 0px 20px",
                     width: "85vw",
                     
                      // border: "1px solid red",
                       }
                    // border: "1px solid red",
                  }}
                >
                  <Typography variant="subtitle1" 
                  
                  sx={{
                    '@media(max-width: 700px)' : {
                   
                   fontSize:"24px"
                    }
                  }}
                  >
                    {" "}
                    Cooling Tower Chemicals
                  </Typography>

                  <Typography variant="body1" 
                  sx={{
                    '@media(max-width: 700px)' : {
                   
                    
                      fontSize:"16px"

                       }
                  }}
                  
                  >
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
                    heights.
                  </Typography>

                  <Typography variant="body1" 
                  
                  sx={{
                    '@media(max-width: 700px)' : {
                   

                    
                      fontSize:"16px"

                       }
                  }}
                  >
                    Experience seamless operations with
                    <span
                      style={{
                        color: "#2C2C2E",
                      }}
                    >
                     {" our tailored solution for both utility and corporate sectors. "}
                    
                    </span>
                  </Typography>
                  <Box>
                    <Button
                      onClick={() => {
                        navigate("/Products");
                      }}
                      sx={{
                        background: "#F2f2f7",
                        mt: "10px",

                        // color: "#3A3A3C",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="button2"
                        sx={{
                          padding: "5px 20px 5px 20px",
                          ":hover": {
                            background: "#F2f2f7",

                            color: "#2A4596",
                          },

                          '@media(max-width: 700px)' : {
                           fontSize:"13px"
                            }
                        }}
                      >
                        {" "}
                        Read more
                      </Typography>
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "500px",
                    ml: "-70px",
                    display:"none",
                    
                    '@media(max-width: 700px)' : {
                    display:"block",
                     
                      height: "250px",
                      ml:"80px"
                    }
                  
                  }}
                >
                
               
                   <img src={product1mo} alt="" height="100%" 
                  
                  
                  />


                </Box>

                <Box
                  sx={{
                    width: "100%",
                    height: "500px",
                    ml: "-70px",
                    display:"none",
                    '@media(min-width: 800px)' : {
                      display:"block",
                    
                     
                    }
                  
                  }}
                >
                
                <img src={product1} alt="" height="100%" 
                 
                  
                  
                  />
                  


                </Box>
              </Box>
            )}
          </section>
          <section
            id="product23"
            style={{
              height: currents?.product23 ? "" : "500px",
              '@media(max-Width: 700px)' : {
                height: currents?.product23 ? "" : "900px",
               
              }
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
            

              height: currents?.product67 ? "" : "500px",
            }}
          >
            {currents?.product67 && <HomeProduct67 />}
          </section>
        </Box>

        <section
          id="industry"
          style={{
            paddingTop: "20px",
          }}
        >
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
        <section>
          <Abautus />
        </section>

        <section
          id="contectus"
          style={{
            height: currents?.contectus ? "" : "500px",
        background: "#F3F2F6",
        margin:"auto",

          }}
        >
          {currents?.contectus && <Contectus />}
        </section>
      </div>
      <Footer />
    </div>
  );
}
