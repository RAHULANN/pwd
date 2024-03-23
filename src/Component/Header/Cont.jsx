import { Box, Typography } from '@mui/material';
import React from 'react';

const Cont = ({open}) => {
    return (
        <Box
        sx={{
          display: open?"flex":"none",
          flexDirection: "column",
          fontFamily: "SF Pro Display",
          justifyContent: "center",
          position:"fixed",
          mt:"80px",
          right:10,
          width:"25%",
          padding:"10px",
          alignContent: "center",
          gap: "10px",
          height: "100px",
 
 borderRadius: "8px",
  backgroundColor: "#E4F2FC",
  '@media(max-width: 700px)' : {
    mt:"40vh",    
    width:"90%",


  }
         
    
        }}
      >
        <Typography
          sx={{
            color: "#2A4596",
            display: "flex",
            fontSize: "18px",
            width: "100%",
            alignContent: "center",
          zIndex: "60000",

          }}
        >
          CONTACT US
        </Typography>

        <Typography
          sx={{
            color: "#222224",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <span
            style={{
              color: "#3A3A3C",
              fontWeight: "400",
            }}
          >
            Email :
          </span>{" "}
          enquiry@pdwtchemicals.com
        </Typography>

        <Typography
          sx={{
            color: "#222224",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <span
            style={{
              color: "#3A3A3C",
              fontWeight: "400",
            }}
          >
            Mob No :{" "}
          </span>{" "}
          9619360212 | 7021947948
        </Typography>
      </Box>
    );
}

export default Cont;
