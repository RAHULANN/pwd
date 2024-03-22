import React from "react";
import product4 from "../../utilities/Icons/product4.png";
import product5 from "../../utilities/Icons/product5.png";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomeProduct45() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "90%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "30px",
        // border: "1px solid red",

        background: "#F3F2F6",
        // marginTop: "70px",
        margin: "40px auto auto auto",
        '@media(max-width: 700px)' : {
          gridTemplateColumns: "1fr",
          width: "99%",
          margin: "10px auto auto auto",
          mt:"40px"
         
        }
      }}
    >
      <Box
        className="product1home"
        sx={{
          display: "grid",
          gridTemplateRows: "300px 300px",
          alignItems: "center",
          width: "100%",
          height: "590px",
          gap: "10px",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
          margin: "auto",
          borderRadius: "24px",
          background: "#FFFFFF",
          '@media(max-width: 700px)' : {
            gridTemplateRows: "270px 200px",
          height: "470px",

           
          }
        }}
      >
        <Box
          sx={{
            ml: "30px",
            padding: "30px",
            '@media(max-width: 700px)' : {
              padding: "5px",
              ml: "10px",
             
            }
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              lineHeight: "35px",
              '@media(max-width: 700px)' : {
                fontSize:"24px"
              
               
              }
            }}
          >
            {" "}
            Offline / Online Descaling Chemicals
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: "10px",

            
           
                '@media(max-width: 700px)' : {
                  fontSize:"16px"
                
                 
                }
             
            }}
          >
            {" "}
            Tailored to{" "}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              efficiently combat scale buildup and corrosion
            </span>{" "}
            in both offline and online systems.
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              Say goodbye to downtime and inefficiencies
            </span>
            {" with our targeted solutions."}
          </Typography>
          <Button
            onClick={() => {
              navigate("/Products");
            }}
            sx={{
              // background: "#F2f2f7",
              mt: "10px",


              // color: "#3A3A3C",
            }}
          >
            {" "}
            <Typography
              variant="button2"
              sx={{
                // padding: "5px 20px 5px 20px",
                ":hover": {
                  // background: "#F2f2f7",

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
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img src={product4} width="100%" alt="" />
        </Box>
      </Box>
      <Box
        className="product1home"
        sx={{
          display: "grid",
          gridTemplateRows: "300px 300px",
          alignItems: "center",
          width: "100%",
          height: "590px",
          gap: "10px",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
          margin: "auto",
          background: "#FFFFFF",
          borderRadius: "24px",

          '@media(max-width: 700px)' : {
            gridTemplateRows: "250px 200px",
          height: "450px",

           
          }
        }}
      >
        <Box
          sx={{
            ml: "30px",
            padding: "30px",
            '@media(max-width: 700px)' : {
              padding: "5px",
              ml: "10px",
             
            }
          }}
        >
          <Typography variant="subtitle1" 
          
          sx={{
            '@media(max-width: 700px)' : {
              fontSize:"24px"
            
             
            }
          }}
          > Chiller Tower Chemicals</Typography>

          <Typography variant="body1"
          
          sx={{
           
            '@media(max-width: 700px)' : {
              fontSize:"16px"
            
             
            }
           }}
          >
            {" "}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              {"Improve industrial/commercial chiller systems  "}
            </span>
            {" with our premium Chiller Tower Chemicals. Designed to "}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              combat microbial growth, scale buildup, & corrosion,
            </span>
            ensuring
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" reliable cooling & minimal maintenance."}
            </span>
          </Typography>
          <Button
            onClick={() => {
              navigate("/Products");
            }}
            sx={{
              // background: "#F2f2f7",
              mt: "10px",

              // color: "#3A3A3C",
            }}
          >
            {" "}
            <Typography
              variant="button2"
              sx={{
                // padding: "5px 20px 5px 20px",
                ":hover": {
                  // background: "#F2f2f7",

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
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img src={product5} width="100%" alt="" />
        </Box>
      </Box>
    </Box>
  );
}
