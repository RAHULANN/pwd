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
import linkedin from "../../utilities/Icons/aboutus/linkedin.png";
import whatsapp from "../../utilities/Icons/aboutus/whatsapp.png";
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

        background: "#F3F2F6",
        padding: "50px 20px 50px 20px",
        display: "grid",
        gridTemplateColumns: "50% 40%",
        justifyContent: "center",
        gap: "40px",
        margin: "50px auto 50px auto",
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
            padding: "40px 10px 40px 40px",
            gap: "30px",
            mt: "50px",
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
              <ListItem sx={{ marginLeft: "0px" }}>
                <ListItemIcon
                  sx={{
                    minWidth: "55px",
                  }}
                >
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    color: "#222224",
                    fontSize: "16px",
                    fontWeight: 500,
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
            padding: "40px",
            gap: "30px",
            // height: "30px",
            mt: "30px",
          }}
        >
          <img src={linkedin} height="100%" alt="linked in" />
          <img src={whatsapp} height="100%" alt="whatsapp" />
        </Box>
      </Box>
      <Box
        sx={{
          background: "#FFF",
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
        }}
      >
        <Box>
          <input
            style={{
              width: "34vw",
              height: "60px",
              marginTop: "50px",
              paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              color: "#AEAEB2",
            }}
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
            required={true}
            placeholder={"name *"}
          />
        </Box>
        <Box>
          <input
            style={{
              width: "34vw",
              height: "60px",
              paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              color: "#AEAEB2",
            }}
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
            required={true}
            placeholder={"E-Mail ID *"}
          />
        </Box>
        <Box>
          <input
            style={{
              width: "34vw",
              height: "60px",

              paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              color: "#AEAEB2",
            }}
            value={formData.phone}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, phone: e.target.value }));
            }}
            required={true}
            placeholder={"Phone number *"}
          />
        </Box>

        <Box>
          <textarea
            style={{
              width: "34vw",
              height: "100px",

              paddingLeft: "20px",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "13px",
              outline: "none",
              color: "#AEAEB2",
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
            }}
            onClick={() => {
              saveForm();
            }}
          >
            <Typography variant="button">Get call back</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
