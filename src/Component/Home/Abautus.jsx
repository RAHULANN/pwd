import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";
export default function   Abautus() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          padding: "40px 80px 40px 80px",
          display: "flex",
          flexDirection: "column",
          background: "#2C407C",
          fontFamily: "Sf pro Display",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          gap: "10px",
          '@media(max-Width: 700px)' : {
            padding: "10px",
            mt:"40px"
           
          }
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#FFFFFF",
              '@media(max-Width: 700px)' : {
                fontSize:"20px"
               
              }
            }}
          >
            About Us
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="headling2"
            sx={{
              fontSize: "20px",
              color: "#E0E8EE",

              fontWeight: "500",

              letterSpacing: "1px",
              textAlign: "center",

              '@media(max-Width: 700px)' : {
                fontSize:"14px"
               
              }

            }}
          >
            <span
              style={{
                color: "#FFFFFF",
              }}
            >
              {"PDWT Chemicals LLP, "}
            </span>
            formerly known as
            <span
              style={{
                color: "#FFFFFF",
              }}
            >
             {" PD Sales Corporation, "}
            </span>
            with over
            <span
              style={{
                color: "#FFFFFF",
              }}
            >
              {" 30 years of specialized experience. "}
            </span>
            At PDWT Chemicals, we understand the unique challenges faced by our
            clients.
         
             Our approach isn't just about efficiency – it's a
            commitment to scale prevention, ensuring the longevity of your
            equipment and the uninterrupted rhythm of your operations.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="callout"
            sx={{
              color: "#FAE180",
              fontSize: "16px",
              display: "flex",
              alignContent: "center",
              cursor: "pointer",
              '@media(max-Width: 700px)' : {
                fontSize:"14px",
                alignItems:"center",
               
              }
            }}
            onClick={() => {
              navigate("/aboutus");
            }}
          >
            Read more <ArrowRightIcon sx={{
                '@media(max-Width: 700px)' : {
                  fontSize:"20px",
                  mt:"1px",
                alignItems:"center",

              
                 
                }
            }} />
          </Typography>
        </Box>
      </Box>
    </>
  );
}
