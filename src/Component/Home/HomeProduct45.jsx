import React from "react";
import product4 from "../../utilities/Icons/product4.png";
import product5 from "../../utilities/Icons/product5.png";
import { Box, Button, Typography } from "@mui/material";

export default function HomeProduct45() {
  return (
    <div
      style={{
        width: "90%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "30px",
        // border: "1px solid red",

        background: "#F3F2F6",
        // marginTop: "70px",
        margin: "40px auto auto auto",
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
        }}
      >
        <Box
          sx={{
            ml: "30px",
            padding: "30px",
          }}
        >
          <Typography variant="subtitle1">
            {" "}
            Offline / online Descaling Chemicals
          </Typography>

          <Typography variant="body1">
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
            with our targeted solutions.
          </Typography>
          <Button
            sx={{
              background: "#FFFFFF",
              mt: "10px",
              color: "#3A3A3C",
              ":hover": {
                background: (theme) => theme.palette.primary.button,
                color: "#FFFFFF",
              },
            }}
          >
            {" "}
            <Typography> Read more</Typography>
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
        }}
      >
        <Box
          sx={{
            ml: "30px",
            padding: "30px",
          }}
        >
          <Typography variant="subtitle1"> Chiller tower Chemicals</Typography>

          <Typography variant="body1">
            {" "}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              Improve industrial/commercial chiller systems
            </span>{" "}
            with our premium Chiller Tower Chemicals. Designed to
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
              reliable cooling & minimal maintenance.
            </span>
          </Typography>
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
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img src={product5} width="100%" alt="" />
        </Box>
      </Box>
    </div>
  );
}
