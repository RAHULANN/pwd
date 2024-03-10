import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { Box, Button, Typography } from "@mui/material";

import Linkedin from "../../utilities/Icons/linkendIn.svg";
import Whatsapp from "../../utilities/Icons/whatsapp.svg";
import { Navigate, useNavigate } from "react-router";
import { handleSubmit } from "./formFirebase";

const ContactUsPopUp = (props) => {
  const { onClose, open, editDeleteState } = props;

  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    onClose();
  };
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
        handleClose();
      })
      .catch((er) => {
        alert("something went wrong");
      });
  };
  return (
    <Dialog
      maxWidth="80vw"
      fullWidth={true}
      sx={{
        height: "700px",
        // width: "900px",
      }}
      PaperProps={{
        style: {
          borderRadius: "20px",

          //   width: "1100px",
          //   padding: "5px",
        },
      }}
      onClose={() => {
        if (loading) return;
        handleClose();
      }}
      open={open}
    >
      <DialogTitle
        sx={{
          display: "flex",
          height: "10px",
          padding: "10px",
          flexDirection: "row",
          alignItems: "center",
          background: "#F3F2F6",

          textAlign: "left",
          color: "#11047A",
        }}
      >
        <button
          onClick={() => {
            if (loading) return;
            handleClose();
          }}
          style={{
            width: "40px",
            height: "40px",
            marginRight: "3.5%",
            background: "#f4f7fe",
            marginLeft: "auto",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.43 0.244723C10.1145 -0.0707873 9.60485 -0.0707873 9.28934 0.244723L5.33333 4.19264L1.37732 0.236633C1.06181 -0.0788775 0.552143 -0.0788775 0.236633 0.236633C-0.0788775 0.552143 -0.0788775 1.06181 0.236633 1.37732L4.19264 5.33333L0.236633 9.28934C-0.0788775 9.60485 -0.0788775 10.1145 0.236633 10.43C0.552143 10.7455 1.06181 10.7455 1.37732 10.43L5.33333 6.47402L9.28934 10.43C9.60485 10.7455 10.1145 10.7455 10.43 10.43C10.7455 10.1145 10.7455 9.60485 10.43 9.28934L6.47402 5.33333L10.43 1.37732C10.7375 1.0699 10.7375 0.552143 10.43 0.244723Z"
              fill="#707EAE"
            />
          </svg>
        </button>
      </DialogTitle>
      <Box
        sx={{
          background: "#F3F2F6",

          // padding: "5px 24px",
        }}
      >
        <Box
          // className="contact"
          sx={{
            width: "90vw",
            background: "#F3F2F6",
            padding: "10px 20px 50px 20px",
            display: "grid",
            gridTemplateColumns: "50% 40%",
            justifyContent: "center",
            gap: "30px",
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
                padding: "20px",
                gap: "30px",
                mt: "50px",
                fontFamily: "Sf pro Display",
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
              width: "100%",
              gridTemplateColumns: "1fr",
              fontFamily: "Sf pro Display",

              alignContent: "center",
              alignItems: "center",
              justifyItems: "center",
              padding: "20px",
              gridGap: "20px",
              boxShadow:
                "9px 10px 36.099998474121094px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <Box>
              <input
                style={{
                  width: "34vw",
                  height: "60px",
                  fontSize: "20px",
                  paddingLeft: "20px",
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: "13px",
                  outline: "none",
                  color: "#222224",
                }}
                value={formData.name}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                }}
                required={true}
                placeholder={"Name *"}
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
                  fontSize: "20px",
                  color: "#222224",
                }}
                type="email"
                placeholder={"E-Mail ID *"}
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                }}
                required={true}
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
                  fontSize: "20px",
                  color: "#222224",
                }}
                value={formData.phone}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, phone: e.target.value }));
                }}
                type="number"
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
                  fontSize: "20px",
                  color: "#222224",
                }}
                placeholder={"How can we help you "}
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
                }}
                onClick={() => {
                  saveForm();
                }}
              >
                <Typography variant="button1">Get call back</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ContactUsPopUp;
