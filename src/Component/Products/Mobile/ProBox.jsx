import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
import React from 'react';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import pro1 from "../../../utilities/Icons/mobilePro/Pro1.png";

const ProBox = ({data}) => {
    return (
        <Box sx={{
            display:"flex",
            width:"100%",
            backgroundColor:"#FFF",
            borderRadius:"12px",
            gap:"6%",
            paddingTop:"20px",
           
            justifyContent:"center",
          

            paddingBottom:"20px"

        }}>

            <Box sx={{
            width:"30%",
            display:"flex",
            // height:"100%",
            alignContent:"center",
           
            justifyContent:"center",
            alignItems:"center",
            justifyItems:"center"
    


            }}>
                <img src={data.img} alt="" style={{
                 height:"250px",
                 width:"100%"

                }} />

            </Box>

            <Box sx={{
            width:"64%",
            display:"flex",
            // alignItems:"center",

            alignContent:"center",
            flexDirection:"column",
            justifyContent:"center",
            textAlign:"start"

            }}>
            <Typography
          variant="subtitle1"
          sx={{
          
           fontSize:"20px",
           fontWeight:"600",
           lineHeight:"23.87px",
           mb:"8px"

          
          }}
        >
           
          {/* {"AHU DESCALING CHEMICALS"} */}
          {data.name}
        </Typography>

      
            
                 
       

                  <Box sx={{
                    width:"95%"

                  }}>

{data.list?.map((el)=> <Box 
                  sx={{
                    display:"flex",
                    width:"100%",
                    gap:"6%",
                    justifyItems:"self-start",

                }}
                  >
                     <Box sx={{
                    display:"flex",
                    justifyItems:"self-start",
                    width:"3%"
                  }}>
            
            <FiberManualRecordIcon sx={{
                fontSize:"10px",
                mt:"4px",
                color:"rgba(99, 99, 102, 1)"
            }}/>

                  </Box>
                  <Box sx={{
                    width:"93%"

                  }}>
                  <Typography  sx={{

color: "#636366",
fontSize: "13px",
fontWeight: 500,

lineHeight:"18.85px",

fontFamily: "SF Pro Display",
                  }}>
    {el}
</Typography>
                  </Box>



                  </Box>)}
                  </Box>
                
            
  

        


        
            </Box>

           

 

        </Box>
    );
}

export default ProBox;
