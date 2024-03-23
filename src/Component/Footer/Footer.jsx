import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100vw",
        background: "#243360",
        fontFamily: "Petrona",
        color: "#FFFFFF",
        fontSize: "14px",
        height: "70px",
        alignContent: "center",
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "500",
        '@media(max-width: 700px)' : {
          fontSize: "12px",
             
            }
      }}
    >
      <p>© 2024 Copyright - All Rights Reserved PDWT Chemicals LLP</p>
    </Box>
  );
}
