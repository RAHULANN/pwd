import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Box, Typography } from "@mui/material";
// import {
//   First,
//   Four,
//   Second,
//   Three,
// } from "../../utilities/Icons/aboutus/Icons";
import ManImg from "../../utilities/Icons/aboutus/Man.png";
import First from "../../utilities/Icons/aboutus/first.png";
import Second from "../../utilities/Icons/aboutus/second.png";
import Three from "../../utilities/Icons/aboutus/three.png";
import Four from "../../utilities/Icons/aboutus/four.png";





import Footer from "../Footer/Footer";
export default function AboutUs() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div
      style={{
        fontFamily: "SF Pro Display",
      }}
    >
      <Header page={"aboutus"} />
      <Box
        sx={{
          mt: "130px",
          justifyContent: "center",
          alignContent: "center",
          // border: "1px solid red",
          textAlign: "center",
          direction: "flex",
          flexDirection: "column",
          justifyItems: "center",
          // width: "90vw",
          alignItems: "center",
          // marginLeft: "auto",
          // marginRight: "auto",

          padding: "0px 150px 0px 150px",

          '@media(max-width: 700px)' : {
            width:"96vw",
            marginLeft:"auto",
            padding: "0px 10px 10px 0px",
           
          }
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#384F9B",
            lineHeight: "60px",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            fontWeight: "500",
            fontSize: "48px",
            // border: "1px solid red",
            width: "50vw",
            // marginLeft: "auto",
            // paddingLeft: "5%",
            justifyContent: "center",
            alignContent: "center",
            margin:"auto",
            '@media(max-width: 700px)' : {
              //  border:"1px solid red",
               alignContent:"center",
            fontSize: "28px",
            padding: "0px",
            paddingLeft: "auto",
            lineHeight:"35px", 
            width: "97vw",
            margin:"auto",

             
            }
          }}
        >
          Progressive Descallent Water Treatment Chemicals
        </Typography>

        <Box
          sx={{
            mt: "20px",
            fontSize: "24px",
            fontWeight: "600",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
            letterSpacing: "0",
            gap: "30px",
            '@media(max-width: 700px)' : {
               
             padding:"0px 10px 0px 10px"
  
               
              }
          }}
        >
          <Typography
            variant="body3"
            sx={{
              fontFamily: "SF Pro Display",
              fontSize: "20px",
              letterSpacing: "1px",
              '@media(max-width: 700px)' : {
               
                fontSize: "13px",
                fontWeight:"600"
    
                 
                }
            }}
          >
            PD Sales Corporation is now PDWT Chemicals LLP,
            <span
              style={{
                color: "#636366",
              }}
            >
              with 30 years of expertise, offers customized water treatment
              solutions for various sectors, including process industries,
              malls, hotels, and corporate entities. Our tailored approach
              ensures efficiency, scale prevention, and prolonged equipment
              life.
            </span>
          </Typography>

          <Typography
            variant="body3"
            sx={{
              fontFamily: "SF Pro Display",
              fontSize: "20px",
              letterSpacing: "1px",
              '@media(max-width: 700px)' : {
               
                fontSize: "13px",
                fontWeight:"600"
    
                 
                }
            }}
          >
            From cooling towers to boilers, our economical and easy-to-handle
            products prevent deposits, corrosion, and biofouling, guaranteeing
            optimal system performance. With specialized formulations for
            cooling towers, boilers, and reverse osmosis systems, as well as
            fireside additives for enhanced combustion and emissions control, we
            deliver tangible results and energy savings.
          </Typography>

          <Typography
            variant="body3"
            sx={{
              fontFamily: "SF Pro Display",
              fontSize: "20px",
              letterSpacing: "1px",
              '@media(max-width: 700px)' : {
               
                fontSize: "13px",
                fontWeight:"600"
    
                 
                }
            }}
          >
            Trust PD Chemicals for industry-leading water treatment solutions.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "100px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "50px",
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
            fontFamily: "SF Pro Display",
            '@media(max-width: 700px)' : {
               
              gap: "20px",
              mb:"-30px"
  
               
              }
          }}
        >
          <Box>
            <Box 
            
            sx={{
              
              height:"45%",

              '@media(max-width: 700px)' : {
                height:"30%",
                gap: "20px",
    
                 
                }
            }}

            >
              <img src={First} height={"100%"} alt="" />

            </Box>
            <Typography
              sx={{
                color: "#3A3A3C",
                fontSize: "14px",
                fontWeight: "500",
                mt: "10px",
                '@media(max-width: 700px)' : {
               
                  fontSize: "6px",
      
                   
                  }
              }}
            >
              {" "}
              3.5 Million m3/hour water treated
            </Typography>
          </Box>

          <Box>

          <Box 
            
            sx={{
              
              height:"45%",

              '@media(max-width: 700px)' : {
                height:"30%",
                gap: "20px",
    
                 
                }
            }}

            >
              <img src={Second} height={"100%"} alt="" />

            </Box>
            {/* <Three /> */}
            <Typography
              sx={{
                color: "#3A3A3C",
                fontSize: "14px",
                fontWeight: "500",
                mt: "10px",
                '@media(max-width: 700px)' : {
               
                  fontSize: "6px",
      
                   
                  }
              }}
            >
              {" "}
              100+ Valued customers
            </Typography>
          </Box>

          <Box>
            {/* <First /> */}
            <Box 
            
            sx={{
              
              height:"45%",

              '@media(max-width: 700px)' : {
                height:"30%",
                gap: "20px",
    
                 
                }
            }}

            >
              <img src={Three} height={"100%"} alt="" />

            </Box>
            <Typography
              sx={{
                color: "#3A3A3C",
                fontSize: "14px",
                fontWeight: "500",
                mt: "10px",
                '@media(max-width: 700px)' : {
               
                  fontSize: "6px",
      
                   
                  }
              }}
            >
              {" "}
              Industrial hubs in india
            </Typography>
          </Box>

          <Box>
          <Box 
            
            sx={{
              
              height:"45%",

              '@media(max-width: 700px)' : {
                height:"30%",
                gap: "20px",
    
                 
                }
            }}

            >
              <img src={Four} height={"100%"} alt="" />

            </Box>
            <Typography
              sx={{
                color: "#3A3A3C",
                fontSize: "14px",
                fontWeight: "500",
                mt: "10px",
                '@media(max-width: 700px)' : {
               
                  fontSize: "6px",
      
                   
                  }
              }}
            >
              {" "}
              Reduced maintenance costs
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#33406A",
          width: "95.5vw",
          mt: "80px",
          padding: "50px 30px 50px 30px",
          display: "flex",
          //   padding: "30px",
          textAlign: "center",
          justifyItems: "center",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          gridGap: "60px",


          
          '@media(max-width: 700px)' : {
          flexDirection:"column",
          padding: "10px 10px 10px 10px",

          width: "95vw",
             
            }
        }}
      >
        <Box
          sx={{
            width: "23%",
            '@media(max-width: 700px)' : {
              width: "80%",
    
                 
                }
          }}
        >
           <Typography
            variant="h4"
            sx={{
              color: "#FFFFFF",
              display:"none",

              '@media(max-width: 700px)' : {
              fontSize:"16px",
                display:"block",
                mb:"20px",
                mt:"10px"
                   
                  }
            }}
          >
            Our Story
          </Typography>
          <Box
            sx={{
              background: "#D9D9D9",
              borderRadius: "4px",
              height: "98%",
              padding: "0px",
            }}
          >
            <img
              src={ManImg}
              alt=""
              height={"100%"}
              style={{
                objectFit: "contain",
                padding:"0px",
              borderRadius: "4px",

                marginBottom:"-4px"
              }}
              width={"100%"}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#EBEBEB",
                fontSize: "28px",
              }}
            >
              Devraj Narayan Naidu
            </Typography>

            <Typography
              sx={{
                color: "#D7D7D7",
                fontSize: "12px",
                fontWeight: "500",
                fontStyle: "italic",
              }}
            >
              {" "}
              {/* (1963-2023) */}
            </Typography>

            <Typography
              sx={{
                color: "#D7D7D7",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              FOUNDER OF PD SALES CORPORATION
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            background: "#556698",
            padding: "40px",
            width: "55%",
            borderRadius: "8px",

            '@media(max-width: 700px)' : {
              width: "80%",
              padding: "10px",
                 
                }
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#FFFFFF",
              '@media(max-width: 700px)' : {
              fontSize:"16px",
                display:"none"
                   
                  }
            }}
          >
            Our Story
          </Typography>
          <Typography
            sx={{
              color: "#F2F2F2",
              fontSize: "20px",
              fontWeight: "500",
              mt: "30px",
              letterSpacing: "1px",
              '@media(max-width: 700px)' : {
                fontSize:"13px",
                mt:"10px"
        
                     
                    }
            }}
          >
            In 1994, we identified a critical challenge within the utility
            sector pertaining to equipment maintenance, specifically regarding
            extensive corrosion and scaling. Traditional methods involving
            manual labor, such as breaking scale with iron rods, proved
            inefficient and cumbersome. Determined to address this issue, we
            conducted thorough research to uncover its root causes, leading to
            the development of our innovative water treatment chemical solution.
          </Typography>

          <Typography
            sx={{
              color: "#F2F2F2",
              fontSize: "20px",
              fontWeight: "500",
              mt: "20px",
              letterSpacing: "1px",
              '@media(max-width: 700px)' : {
                fontSize:"13px"
        
                     
                    }
            }}
          >
            Our chemicals effectively prevent scaling and disperse easily within
            systems, resulting in reduced maintenance costs and water
            consumption. With a strong focus on user-centricity, we have
            established ourselves as a premium and unique entity in the market.
            Our business thrives on word-of-mouth referrals, built upon a
            foundation of trust, loyalty, and product quality.
          </Typography>

          <Typography
            sx={{
              color: "#F2F2F2",
              fontSize: "20px",
              fontWeight: "500",
              mt: "20px",
              letterSpacing: "1px",
              '@media(max-width: 700px)' : {
                fontSize:"13px"
        
                     
                    }
            }}
          >
            Continuing the legacy of PD Sales Corporation, we have evolved into
            PDWT Chemicals LLP. Our commitment remains steadfast in catering to
            the needs of our users, offering customized solutions with our own
            manufactured chemicals.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
