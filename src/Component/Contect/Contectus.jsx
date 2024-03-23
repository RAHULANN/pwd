import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

import "./contect.css";
import { handleSubmit } from "./formFirebase";
// import { Linkedin, Whatsapp } from "../../utilities/Icons/Icons";
import Linkedin from "../../utilities/Icons/linkendIn.svg";
import Whatsapp from "../../utilities/Icons/whatsapp.svg";

export default function Contectus() {
  const init = {
    name: "",
    email: "",
    phone: "",
    howwecanhelp: "",
  };
  const [formData, setFormData] = useState(init);

  const saveForm = async () => {
    await handleSubmit(formData);
  };
  return (
    <Box
      className="contact"
      sx={{
        width: "98vw",
        background: "#F3F2F6",
        padding: "50px 20px 50px 20px",
        display: "grid",
        gridTemplateColumns: "50% 40%",
        justifyContent: "center",
        gap: "40px",
        '@media(max-width: 700px)' : {
          display: "flex",
          width: "98vw",
          margin:"auto",
         flexDirection:"column-reverse",
        padding: "50px 0px 50px 0px",

          }
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignContent: "start",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignContent: "start",
            flexDirection: "column",
            padding: "40px",
            gap: "30px",
            mt: "50px",
            fontFamily: "Sf pro Display",

            '@media(max-width: 700px)' : {
              padding: "10px",
              }
          }}
        >
          <Typography variant="body3">
            {" "}
            Join countless satisfied clients who trust PDWT Chemicals for
            industry-leading water treatment solutions.
          </Typography>

          <Typography variant="body3">
            {" "}
            Let us elevate your operations to new heights.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Typography>
              {" "}
              <Typography
                variant="callout"
                sx={{
                  color: "#636366",
                }}
              >
                {" "}
                Email:
              </Typography>{" "}
              <Typography
                variant="callout"
                sx={{
                  color: "#222224",
                }}
              >
                enquiry@pdwtchemicals.com
              </Typography>
            </Typography>

            <Typography>
              {" "}
              <Typography
                variant="callout"
                sx={{
                  color: "#636366",
                }}
              >
                {" "}
                Mobile:
              </Typography>
              <Typography
                variant="callout"
                sx={{
                  color: "#222224",
                }}
              >
                9619360212
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "start",
            flexDirection: "row",
            padding: "40px",
            gap: "30px",
            // height: "30px",
            mt: "50px",
          }}
        >
          <img src={Linkedin} alt="" />
          <img src={Whatsapp} alt="" />

          {/* <Linkedin /> */}
          {/* <Whatsapp /> */}
        </Box>
      </Box>
      <Box
        sx={{
          background: "#FFF",
          border: "1px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          display: "grid",
          width: "98%",
          gridTemplateColumns: "1fr",
          fontFamily: "Sf pro Display",

          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
        
          gridGap: "20px",
          boxShadow: "9px 10px 36.099998474121094px 0px rgba(0, 0, 0, 0.12)",

          '@media(max-width: 700px)' : {
            padding: "1px",
            }
        }}
      >
        <Box sx={{
          width:"95%",
          '@media(max-width: 700px)' : {
            width: "90vw",
            mt:"20px"
          
            }
        }}>
          <input
            style={{
              width: "100%",
              height: "60px",

              // paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              fontSize: "20px",
              color: "#222224",
             
            }}
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
            required={true}
            placeholder={" Name *"}
          />
        </Box>
        <Box sx={{
          width:"95%",
          '@media(max-width: 700px)' : {
            width: "90vw",
            mt:"20px"
          
            }
        }}>
          <input
            style={{
              width: "100%",
              height: "60px",
              // paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              fontSize: "20px",
              color: "#222224",
            }}
            placeholder={" E-Mail ID *"}
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
            required={true}
          />
        </Box>
        <Box sx={{
          width:"95%",
          '@media(max-width: 700px)' : {
            width: "90vw",
            mt:"20px"
          
            }
        }}>
          <input
            style={{
              width: "100%",
              height: "60px",

              // paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              fontSize: "20px",
              color: "#222224",
            }}
            value={formData.phone}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, phone: e.target.value }));
            }}
            required={true}
            placeholder={" Phone number *"}
          />
        </Box>

        <Box sx={{
          width:"95%",
          '@media(max-width: 700px)' : {
            width: "90vw",
            mt:"20px"
          
            }
        }}>
          <textarea
            style={{
              width: "100%",
              height: "100px",
              fontFamily: "Sf pro Display",

              // paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              fontSize: "20px",
              color: "#222224",
            }}
            placeholder={" How can we help you "}
            value={formData.howwecanhelp}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                howwecanhelp: e.target.value,
              }));
            }}
            required={true}
          />
        </Box>

        <Box>
          <Button
            sx={{
              width: "36vw",
              height: "40px",

              //   paddingLeft: "20px",
              //   border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "12px",
              outline: "none",
              color: "#FFF",
              background: "#2C407C",
              padding: "0px, 16px, 0px, 16px",
              ":hover": {
                background: "#2C407C",
              },
              '@media(max-width: 700px)' : {
                width: "93vw",
              mb:"40px"
              
                }
            }}
            onClick={() => {
              saveForm();
            }}
          >
            <Typography variant="button1">Get A Call Back</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
