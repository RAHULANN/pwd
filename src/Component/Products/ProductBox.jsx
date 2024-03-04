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
export default function ProductBox({ data, index = 0 }) {
  return (
    <Box
      sx={{
        display: "flex",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
        height: "550px",
        width: "95vw",

        flexDirection: index % 2 > 0 ? "row-reverse" : "row",
        marginLeft: "auto",
        marginRight: "auto",

        mt: "40px",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "50%",
        }}
      >
        <img src={data?.img} height="100%" width="100%" alt="" />
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
          alignItems: "start",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            padding: "8px 16px 8px 16px",
          }}
        >
          {data?.name}
        </Typography>

        <List
          sx={{
            width: "100%",
          }}
        >
          {data?.list?.map((el) => (
            <ListItem sx={{ marginLeft: "0px" }}>
              <ListItemIcon
                sx={{
                  minWidth: "55px",
                }}
              >
                <LabelIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  color: "#636366",
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "SF Pro Display",
                }}
                primary={el}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
