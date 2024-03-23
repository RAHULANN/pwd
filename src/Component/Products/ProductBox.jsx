import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import product1 from "../../utilities/Icons/product/1product.png";
import LabelIcon from "@mui/icons-material/Label";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function ProductBox({ data, index = 0 }) {
  return (
    <Box
      sx={{
        display: "flex",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
        height: "380px",
        width: "90vw",

        flexDirection: index % 2 > 0 ? "row-reverse" : "row",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        mt: "85px",

        

        '@media(max-width: 700px)' : {
          gridTemplateColumns: "1fr",
          flexDirection: "column-reverse",  
          height: "auto",
          mt: "20px",
         
        }
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "45%",
          '@media(max-Width: 700px)' : {
            width: "100%",
            mt:"30px"
           
          }
        }}
      >
        <img src={data?.img} height="100%" width="100%" alt="" />
      </Box>
      <Box
        sx={{
          width: "50%",
       
          display: "flex",
          height: "100%",
          flexDirection: "column",
          // border: "1px solid red",
          justifyContent: "center",
          // alignContent: "center",
          // justifyItems: "center",
          // alignItems: "start",
          '@media(max-Width: 700px)' : {
            width: "100%",
           
          },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            padding: "8px 16px 8px 16px",
            mb: "-10px",

            '@media(max-Width: 700px)' : {
          fontSize:"29px",
            padding: "8px 10px 8px 10px",
             
            },
          }}
        >
          {data?.name}
        </Typography>

        <Box>
          <List
            sx={{
              width: "100%",
            }}
          >
            {data?.list?.map((el) => (
              <ListItem
                sx={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  margin: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "55px",
                    alignContent: "start",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: "12px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    color: "#636366",
                    fontSize: "20px",
                    fontWeight: 500,
                    marginLeft: "-30px",
                    
                    fontFamily: "SF Pro Display",
                  }}
                  primary={el}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
