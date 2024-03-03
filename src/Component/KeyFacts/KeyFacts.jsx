import React from "react";
import "./keyFacts.css";
import centerlogo from "../../utilities/Icons/KeyFacts/logocenter.png";
import first from "../../utilities/Icons/KeyFacts/firstIcon.svg";

import second from "../../utilities/Icons/KeyFacts/second.svg";
import three from "../../utilities/Icons/KeyFacts/three.svg";
import four from "../../utilities/Icons/KeyFacts/four.svg";
import { Box, Typography } from "@mui/material";

export default function KeyFacts() {
  return (
    <Box>
      <Box
        sx={{
          width: "95vw",
          padding: "50px",
        }}
      >
        <Typography variant="h3">Key Facts</Typography>
      </Box>
      <div className="mainboxkey">
        <div className="left">
          <Box className="firstboxanimation">
            <img src={first} height="60px" alt="" />
            <Typography variant="body2">
              {" "}
              Almost 3.5 million m3/hour water treated
            </Typography>
          </Box>
          <Box className="secondboxanimation">
            <img src={three} height="60px" alt="" />
            <Typography variant="body2"> ISO 9001: 2015</Typography>
          </Box>
        </div>
        <div className="center">
          <img src={centerlogo} width="200px" alt="" />
        </div>
        <div className="right">
          {" "}
          <div className="threeanimationbox">
            <img src={second} height="60px" alt="" />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 600,
                }}
              >
                100 +
              </Typography>
              <Typography variant="body2">valued customers</Typography>
            </Box>
          </div>
          <div className="fouranimationbox">
            <img src={four} height="60px" alt="" />
            <Typography variant="body2">
              {" "}
              Operations in all major industrial hubs in india
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
}
