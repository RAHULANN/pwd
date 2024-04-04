import { Box, Typography } from '@mui/material';
import React from 'react';
import ProBox from './ProBox';
import { dataArr } from './ProMoData';

const ProMobil = () => {
    return (
        <Box sx={{
        background: "#F7F7FB",
        mt:"70px",
        padding:"10px 20px 10px 20px",
        display:"none",

        '@media(max-Width: 700px)' : {
            display:"block"
              
                 
                },
        }}>
            
            <Box sx={{
                textAlign:"center",



            }}>
                <Box sx={{
                            
                            // height:"300px",
                           paddingTop:"30px"
                }}>
                <Typography sx={{
                    fontSize:"18px",
                    fontWeight:"600",
                    color:"rgba(34, 34, 36, 1)"
                   
                }}>
                PRODUCT
                </Typography>

                <Typography sx={{
                    fontSize:"14px",
                    fontWeight:"400",
                    color:"rgba(99, 99, 102, 1)",
                    lineHeight:"20.3px",
                    letterSpacing:"1.5%"
                   
                }}>
                Our specialized chemicals ensure trouble-free operation, efficiency, and equipment lifespan extension.
                </Typography>
                </Box>
  
            </Box>

            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:"20px",
                mt:"20px"
            }}>
                {
                    dataArr?.map((el)=>
            <ProBox data={el}/>
                    
                    )
                }
            </Box>
        </Box>
    );
}

export default ProMobil;
