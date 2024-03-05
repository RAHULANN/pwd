import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

import ResponsiveAppBar from "./TopBar";
const drawerWidth = 208;

export default function SideBar({ page, children }) {
  const sideBarArr = [
    { text: "Home", icon: <InboxIcon />, aicon: <InboxIcon /> },

    { text: "Logout", icon: <LogoutIcon />, aicon: <LogoutIcon /> },
  ];
  const navigat = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        background: (theme) => theme.palette.primary.bg,
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <CssBaseline />
      <ResponsiveAppBar />

      <Drawer
        sx={{
          width: drawerWidth,
          // margin: "10px,0px 0px 30px",
          // border: "1px solid red",

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            mt: "10px",
            borderRadius: "6px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            edge="start"
          >
            {/* <MenuIcon /> */}
          </IconButton>
        </Toolbar>
        <List
          sx={{
            // marginTop: "20px",
            background: "#FFFFFF",
          }}
        >
          {sideBarArr.map((text, index) => (
            <ListItem key={text.text} disablePadding>
              <ListItemButton
                sx={{
                  background: index == page ? "#4996C9" : "#FFFFFF",
                  borderRadius: "6px",
                  margin: "2px",
                }}
                onClick={() => {
                  if (text.text == "Home") {
                    navigat("/");
                  }

                  if (text.text == "Logout") {
                    localStorage.clear();
                    navigat("/admin/login");
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "36px",
                  }}
                >
                  {index == page ? text.aicon : text.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color:
                      index == page
                        ? (theme) => theme.palette.primary.onText
                        : (theme) => theme.palette.primary.text,
                  }}
                >
                  {text.text}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          mt: "20px",
          ml: "30px",
          mr: "30px",
          minHeight: "100vh",
          background: (theme) => theme.palette.primary.bg,
        }}
      >
        <Toolbar />

        {children}
        {/* <TableBox /> */}
      </Box>
    </Box>
  );
}
