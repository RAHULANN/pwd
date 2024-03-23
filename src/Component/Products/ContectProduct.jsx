import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Linkedin from "../../utilities/Icons/linkendIn.svg";
import Whatsapp from "../../utilities/Icons/whatsapp.svg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "../Contect/contect.css";
import LabelIcon from "@mui/icons-material/Label";
import { handleSubmit } from "../Contect/formFirebase";

export default function ContectProduct() {
  const [data, setData] = useState([
    "Comprehensive range of tailor-made formulations.",
    "Economical and easy-to-handle solutions.",
    "Prevention of deposits, corrosion, and fouling.",
    "Unmatched efficiency, safety, and environmental responsibility.",
  ]);

  const init = {
    name: "",
    email: "",
    phone: "",
    howwecanhelp: "",
  };
  const [formData, setFormData] = useState(init);

  const saveForm = async () => {
    handleSubmit(formData)
      .then(() => {
        // handleClose();
      })
      .catch((er) => {
        alert("something went wrong");
      });
  };
  return (
    <Box
      className="contact"
      sx={{
        width: "95vw",

        background: "#F7F7FB",
        padding: "50px 20px 50px 20px",
        display: "grid",
        gridTemplateColumns: "50% 40%",
        justifyContent: "center",
        gap: "40px",
        height: "450px",
        margin: "50px auto 50px auto",
        '@media(max-Width: 700px)' : {
          gridTemplateColumns: "1fr",
          height: "auto",
          padding: "10px 10px 10px 10px",
          margin: "10px auto 10px auto",
          width: "98%",
         
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
            padding: "20px 10px 40px 40px",
            gap: "20px",
            mt: "10px",
          }}
        >
          <Typography variant="subtitle2">
            {" "}
            Choose PDWT Chemicals for:
          </Typography>

          <List
            sx={{
              width: "100%",
            }}
          >
            {data?.map((el) => (
              <ListItem sx={{ margin: "0px", padding: "0px" }}>
                <ListItemIcon
                  sx={{
                    minWidth: "55px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: "12px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    color: "#222224",
                    fontSize: "16px",
                    fontWeight: 500,
                    marginLeft: "-30px",
                    fontFamily: "SF Pro Display",
                    letterSpacing: "1.5%",
                  }}
                  primary={el}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "start",
            flexDirection: "row",
            padding: "20px",
            gap: "30px",
            // height: "30px",
            // mt: "30px",
          }}
        >
          <img src={Linkedin} height="100%" alt="linked in" />
          <img src={Whatsapp} height="100%" alt="whatsapp" />
        </Box>
      </Box>
      <Box
        sx={{
          background: "#FFF",
          height: "450px",
          border: "1px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          display: "flex",
          width: "100%",
          gridTemplateColumns: "1fr",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
          padding: "10px",
          gridGap: "20px",
          gap: "20px",
          boxShadow: "9px 10px 36.099998474121094px 0px rgba(0, 0, 0, 0.12)",
          '@media(max-Width: 700px)' : {
            padding: "1px",
           
          }
        }}
      >
        <Box sx={{
            width: "34vw",
            '@media(max-width: 700px)' : {
              width: "80vw",
         
            }
        }}>
          <input
            style={{
              width:"100%",
              height: "40px",
              marginTop: "50px",
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
            width: "34vw",
            '@media(max-width: 700px)' : {
              width: "80vw",
         
            }
        }}>
          <input
            style={{
              width: "100%",
              height: "40px",
              // paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              fontSize: "20px",
              color: "#222224",
            }}
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
            required={true}
            placeholder={" E-Mail ID *"}
          />
        </Box>
        <Box sx={{
            width: "34vw",
            '@media(max-width: 700px)' : {
              width: "80vw",
         
            }
        }}>
          <input
            style={{
              width: "100%",
              height: "40px",

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
            placeholder={"Phone number *"}
          />
        </Box>

        <Box sx={{
            width: "34vw",
            '@media(max-width: 700px)' : {
              width: "80vw",
         
            }
        }}>
          <textarea
            style={{
              width: "100%",
              height: "60px",
              fontFamily: "Sf pro Display",

              // paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              fontSize: "20px",
              color: "#222224",
            }}
            value={formData.howwecanhelp}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                howwecanhelp: e.target.value,
              }));
            }}
            required={true}
            placeholder={"How can we help you "}
          />
        </Box>

        <Box>
          <Button
            sx={{
              width: "36vw",
              height: "40px",

              //   paddingLeft: "20px",
              //   border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "20px",
              outline: "none",
              color: "#FFF",
              background: "#2C407C",
              padding: "0px, 16px, 0px, 16px",
              ":hover": {
                background: "#2C407C",
              },

              '@media(max-width: 700px)' : {
                width: "80vw",
           
              }
            }}
            onClick={() => {
              saveForm();
            }}
          >
            <Typography variant="button">Get A Call Back</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
