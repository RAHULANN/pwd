import { Box, Typography } from "@mui/material";
import React from "react";
import PowerPlants from "../../utilities/Icons/industry/Power Plants.png";
import Manufacturing from "../../utilities/Icons/industry/Manufacturing.png";

import ChemicalPlants from "../../utilities/Icons/industry/Chemical Plants.png";

import CommercialBuildings from "../../utilities/Icons/industry/Commercial Buildings.png";
import HVACContractors from "../../utilities/Icons/industry/HVAC Contractors.png";
import TextileGarment from "../../utilities/Icons/industry/Textile & Garment.png";
import Pharmaceuticals from "../../utilities/Icons/industry/Pharmaceuticals.png";

import OilAndGas from "../../utilities/Icons/industry/Oil And Gas.png";

export default function Industry() {
  const data = [
    {
      name: "Power Plants",
      url: PowerPlants,
    },
    {
      name: "Manufacturing",
      url: Manufacturing,
    },
    {
      name: "ChemicalPlants",
      url: ChemicalPlants,
    },
    {
      name: "Textile & Garment",
      url: TextileGarment,
    },
    {
      name: "Pharmaceuticals",
      url: Pharmaceuticals,
    },
    {
      name: "Oil And Gas",
      url: OilAndGas,
    },
    {
      name: "Commercial Buildings",
      url: CommercialBuildings,
    },
    {
      name: "HVAC Contractors",
      url: HVACContractors,
    },
  ];
  return (
    <Box
      sx={{
        width: "90%",
        // border: "1px solid red",
        // justifyContent: "center",
        margin: "auto",
        padding: "40px",
        mt: "40px",
        '@media(max-width: 700px)' : {
          width: "96%",
          padding: "10px",
          mt: "0px",
         }
      }}
    >
      <Typography variant="h5" 
      sx={{
        
      '@media(max-width: 700px)' : {
        
       fontSize:'32px'
      }
      }}
      > Industries we serve</Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
        
          mt: "50px",
          gap: "80px",
          '@media(max-width: 700px)' : {
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
         
           }
        }}
      >
        {data?.map((el) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              height: "97px",
              fontFamily: "Sf pro Display",
              '@media(max-width: 700px)' : {
                height: "70px",
             
               }
            }}
          >
            <Box
              sx={{
                height: "80%",
                '@media(max-width: 700px)' : {
                  height: "50%",
               
                 }
              }}
            >
              <img src={el.url} alt="" height={"100%"} />
            </Box>
            <Typography variant="callout" 
            
            sx={{
              '@media(max-width: 700px)' : {
               fontSize:"12.08px"
             
               }
            }}
            > {el.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
