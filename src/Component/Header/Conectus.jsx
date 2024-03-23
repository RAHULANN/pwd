import * as React from "react";
import PropTypes from "prop-types";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

export default function DisabledPortalPopup() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        overflowY: "auto",
       
        // padding: "40px",
      }}
    >
      <PopupWithTrigger
        id="popup-without-portal-fixed"
        buttonLabel="No portal, 'fixed' strategy"
        disablePortal
        strategy="fixed"
      />
    </Box>
  );
}

function PopupWithTrigger(props) {
  const { id, buttonLabel, ...other } = props;

  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);

  return (
    <div>
      <Button
        aria-describedby={"popup-without-portal-fixed"}
        type="button"
        onClick={handleClick}
        sx={{
          overflow: "hidden",
        }}
      >
        Contact us
      </Button>
      <Popup
        id={"popup-without-portal-fixed"}
        open={open}
        anchor={anchor}
        {...other}
        sx={{
          zIndex: "6000",
         
          top: "40",
        }}
      >
        <PopupBody 
        
        sx={{
          zIndex: "60000",
          position:"sticky"
        }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "SF Pro Display",
              justifyContent: "center",
              alignContent: "center",
              gap: "10px",
             
              zIndex: "60000",
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
        </PopupBody>
      </Popup>
    </div>
  );
}

PopupWithTrigger.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  id: PropTypes.string,
};

const Popup = styled(BasePopup)`
  z-index: 4000;
`;

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const PopupBody = styled("div")(
  ({ theme }) => `
  width: max-content;
  height: 100px;
  display: flex;
  align-items: center;
  align-content:center;
  padding: 16px;
  z-index:50000;
  position:sticky;
  margin: 8px;
  border-radius: 8px;
  background-color: #E4F2FC;
  box-shadow: ${
    theme.palette.mode === "dark"
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: SF Pro Display;
  font-size: 11px
`
);

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const Button = styled("button")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;


  &:hover {
    background-color: #2A4596;
  }

  &:active {
    background-color: #2A4596;
    box-shadow: none;
  }

  

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: #2A4596;
    }
  }
`
);
