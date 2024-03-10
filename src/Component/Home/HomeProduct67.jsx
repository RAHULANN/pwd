import React from "react";
import product6 from "../../utilities/Icons/product6.png";
import product7 from "../../utilities/Icons/product7.png";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomeProduct67() {
  const navigate = useNavigate();

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
          <Typography variant="subtitle1"> Fireside Additives</Typography>

          <Typography variant="body1">
            {" "}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              Maximize combustion efficiency with our fireside additives,
            </span>{" "}
            controlling corrosion and emissions. Explore our range
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              featuring inhibitors, catalysts, and cleaning compounds.
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
          <img src={product6} width="100%" alt="" />
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
          <Typography variant="subtitle1">
            {" "}
            R.O Antiscalents & Cleanser
          </Typography>

          <Typography variant="body1">
            {" "}
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              {" "}
              Optimize R.O. membrane performance
            </span>{" "}
            with our antiscalant and cleaning chemicals,
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              preventing fouling and scaling.
            </span>
            Explore our range of R.O. antiscalants
            <span
              style={{
                color: "#2C2C2E",
              }}
            >
              (carbamate, sulfate, silica inhibitor)
            </span>
            and cleaners.
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
          <img src={product7} width="100%" alt="" />
        </Box>
      </Box>
    </div>
  );
}
