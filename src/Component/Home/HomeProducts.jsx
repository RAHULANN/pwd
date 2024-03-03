import React from "react";
import product2 from "../../utilities/Icons/product2.png";
import product3 from "../../utilities/Icons/product3.png";
import { Box, Button, Typography } from "@mui/material";
import "./prpduct23.css";
export default function HomeProducts() {
  return (
    <div
      className="product23home"
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
        sx={{
          display: "grid",
          gridTemplateRows: "300px 300px",
          alignItems: "center",
          width: "100%",
          height: "600px",
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
          <Typography variant="subtitle1"> Boiler chemicals</Typography>

          <Typography variant="body1">
            {" "}
            Ensure{" "}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              boiler longevity
            </span>{" "}
            and efficiency with our multipurpose formulations, including{""}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              polymeric sludge conditioners, oxygen scavengers, and corrosion
              inhibitors.
            </span>
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
          <img src={product2} width="100%" alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "300px 300px",
          alignItems: "center",
          width: "100%",
          height: "600px",
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
          <Typography variant="subtitle1"> AHU descaling chemicals</Typography>

          <Typography variant="body1">
            {" "}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              Our formulations tackle mineral deposits, scale buildup, and
              corrosion head-on.
            </span>{" "}
            Prioritizing efficiency, safety, and environmental responsibility,
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              we deliver unmatched solutions for peak HVAC performance.
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
          <img src={product3} width="100%" alt="" />
        </Box>
      </Box>
    </div>
  );
}
