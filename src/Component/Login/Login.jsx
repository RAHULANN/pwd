import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import bgImg from "../../utilities/Icons/home.png";

import { Box, Button, Typography } from "@mui/material";
import LoadingScreen from "../Common/LoadingScreen";
import { auth } from "../../Firebase";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false);
  //   const navigate = useNavigate();
  //   const { data, error, loading, postData } = usePOSTApiCalls();
  //   useEffect(() => {
  //     let acToken = getItemInLocalStorage("accessToken");

  //     if (acToken) {
  //       navigate("/");
  //     }
  //     if (data) {
  //       // console.log(data);
  //       // alert("data");
  //       setItemInLocalStorage("accessToken", data.accessToken);
  //       setItemInLocalStorage("refToken", data.refToken);
  //       navigate("/");
  //     }
  //   }, [data]);

  const handelLogin = async () => {
    await auth.signInWithEmailAndPassword(
      userData.email.trim(),
      userData.password
    );

    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // gap: "30px",
        // border: "1px solid red",
        // justifyContent: "center",
        // alignItems: "center",
        padding: "20px 20px 0px 20px",
        height: "95vh",
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <LoadingScreen open={loading} />
      <Box>
        <img src={require("../Header/logo.png")} className="Logo" alt="logo" />
      </Box>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          marginTop: "5vh",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: "20px",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            justifyContent: "center",
            // border: "1px solid red",
          }}
        >
          <Box>
            <Typography variant="subtitle1"> Login</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography
              variant="level"
              sx={{
                color: (theme) => theme.palette.secondary.text,
              }}
            >
              {" "}
              User id{" "}
            </Typography>

            <Box>
              <input
                type="text"
                placeholder="User id"
                style={{
                  outline: "none",
                  width: "100%",
                  border: "1px solid #D9D9D9",
                  height: "37px",
                  borderRadius: "6px",
                  color: "#1B1D1F",
                  fontWeight: "400",
                  fontSize: "14px",
                  padding: "2px 8px",
                  fontFamily: "Poppins,sans-serif",
                }}
                onChange={(e) => {
                  setUserData((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography
              variant="level"
              sx={{
                color: (theme) => theme.palette.secondary.text,
              }}
            >
              {" "}
              Password{" "}
            </Typography>

            <Box>
              <input
                type="password"
                placeholder="Password"
                style={{
                  outline: "none",
                  width: "100%",
                  border: "1px solid #D9D9D9",
                  height: "37px",
                  borderRadius: "6px",
                  color: "#1B1D1F",
                  fontWeight: "400",
                  fontSize: "14px",
                  padding: "2px 8px",
                  fontFamily: "Poppins,sans-serif",
                }}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={() => {
                handelLogin();
              }}
            >
              Login{" "}
            </Button>
          </Box>

          <div
            style={{
              color: "red",
            }}
          >
            {/* {error}
            {data?.message} */}
          </div>
        </Box>

        <Box>{/* <img src={doctorImg} height="75%" alt="doctor" /> */}</Box>
      </div>
    </div>
  );
}
