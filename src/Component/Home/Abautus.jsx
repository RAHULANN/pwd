import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";
export default function Abautus() {
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
          gap: "30px",
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#FFFFFF",
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
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
              }}
            >
              PDWT Chemicals LLP,
            </span>
            formerly known as
            <span
              style={{
                color: "#FFFFFF",
              }}
            >
              PD Sales Corporation,
            </span>
            with over
            <span
              style={{
                color: "#FFFFFF",
              }}
            >
              30 years of specialized experience.
            </span>
            At PDWT Chemicals, we understand the unique challenges faced by our
            clients. Our approach isn't just about efficiency – it's a
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
            }}
            onClick={() => {
              navigate("/aboutus");
            }}
          >
            Read more <ArrowRightIcon />
          </Typography>
        </Box>
      </Box>
    </>
  );
}
