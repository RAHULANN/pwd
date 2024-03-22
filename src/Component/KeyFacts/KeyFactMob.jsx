import { Box, Typography } from '@mui/material';
import React from 'react';
import first from "../../utilities/Icons/KeyFacts/firstIcon.svg";
import second from "../../utilities/Icons/KeyFacts/second.svg";
import three from "../../utilities/Icons/KeyFacts/three.svg";
import four from "../../utilities/Icons/KeyFacts/four.svg";
const KeyFactMob = () => {

    const data=[
        {
            name:"Almost 3.5 million m3/hour water treated",
            url:first
        },
        {
            name:"100+  valued customers",
            url:second
        },
        {
            name:"ISO 9001: 2015",
            url:three
        },
        {
            name:"Operations in all major industrial hubs in India",
            url:four
        }
    ]
    return (
        <>
        
        {
            data?.map((el)=>
            
            <Box sx={{
                //  boxShadow: "0px 0px 0px 1px #00000040",
                 boxShadow:"0px 1.5px 1px 0px #00000040",
               height:"56px",
               background:"#F5FBFF",
               borderRadius:"13.81px",
               width:"95%",
               display:"flex",
               justifyContent:"center",
               alignContent:"center",
              justifyItems:'center',
              alignItems:"center",
              margin:'auto',
               gap:"10px",
               mt:"10px"
    
              
    
    
            }}> 
            <Box sx={{
                width:"20%",
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
               justifyItems:'center',
               alignItems:"center",
               height:"100%"
    
    
            }}>
            <img src={el.url} height="80%" width={"80%"} alt="" />
            </Box>
           
            <Box sx={{
                width:"80%",
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
               justifyItems:'center',
               alignItems:"center",
            }}>
            <Typography variant="body2" sx={{
                fontSize:"13px"
            }}>
                  {" "}
                 {
                    el.name
                 }
                </Typography>
            </Box>
    
    
    
            </Box>
            
            )
        }
        </>
       
       
    );
}

export default KeyFactMob;
