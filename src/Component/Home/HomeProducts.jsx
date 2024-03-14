import React from "react";
import product2 from "../../utilities/Icons/product2.png";
import product3 from "../../utilities/Icons/product3.png";
import { Box, Button, Typography } from "@mui/material";
import "./prpduct23.css";
import { useNavigate } from "react-router-dom";
export default function HomeProducts() {
  const navigate = useNavigate();

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
          <Typography variant="subtitle1"> Boiler Chemicals</Typography>

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
          <Typography variant="subtitle1"> AHU Descaling Chemicals</Typography>

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
          <img src={product3} width="100%" alt="" />
        </Box>
      </Box>
    </div>
  );
}
