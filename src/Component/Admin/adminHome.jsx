import React, { useEffect, useMemo, useState } from "react";
// import viewImg from "../../../utilities/Icons/courseIcons/view.png";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
// import deleteImg from "../../../utilities/Icons/courseIcons/delete.png";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import ClearIcon from "@mui/icons-material/Clear";
import { tableData } from "./homedata";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../Common/LoadingScreen";
import TableBox from "../Common/TableBox";
import SideBar from "./SideBar/SideBar";
import { useAuth } from "../Login/Auth";
import { db } from "../../Firebase";
import { Box, Button, Typography } from "@mui/material";
// import useGetApiCalls from "../../../Config/GetApiHook";
// import LoadingScreen from "../../../Config/LoadingScreen";
// import deleteDataAPI from "../../../Config/DeleteAPi";
// import DeletePopUp from "../Questions/DeletePopUp";
export default function HomeTable() {
  const [dataModified, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const { currentUser, login, logout, signUp } = useAuth();

  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const navigate = useNavigate();
  const [extraStateForData, setExtraStateForData] = useState([]);
  const [stateForData, setStateForData] = useState([]);
  const [filterEmail, setfilterEmail] = useState("");
  // console.log("currentUser", currentUser);
  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name", width: "15%" },
      { Header: "Email", accessor: "email", width: "15%" },
      { Header: "Phone", accessor: "phone", width: "15%" },
      { Header: "How we can help", accessor: "howwecanhelp", width: "40" },

      // { Header: "State", accessor: "state" },
      // { Header: "City", accessor: "city" },
      // { Header: "Address", accessor: "address" },
      { Header: "Action", accessor: "action", width: "10%" },
    ],
    []
  );

  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      navigate("/admin/login");
    }
  }, []);
  useEffect(() => {
    // fetchDataLocal();
    // customer/customers/list?page=1
    fetchData();
  }, [tableData]);

  const fetchData = async () => {
    setloading(true);
    const resData = await db.collection("formData").get();
    setloading(false);
    let mapmedData = resData.docs.map((el) => ({ ...el.data(), id: el.id }));
    setExtraStateForData(mapmedData);
    setStateForData(mapmedData);
    fetchDataLocal(mapmedData);
  };
  const filterByEmail = async () => {
    setloading(true);
    let filterd = extraStateForData.filter((el) =>
      el.email.includes(filterEmail)
    );
    setloading(false);
    fetchDataLocal(filterd);
  };
  const fetchDataLocal = async (agents) => {
    try {
      // const agents = stateForData;

      setData(
        agents.map((el) => ({
          ...el,
          action: (
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              {/* <img
                src={viewImg}
                style={{
                  cursor: "pointer",
                }}
                alt=""
                onClick={() => {
                  navigate("/viewPatient", { state: el });
                }}
              /> */}

              {/* <img
                src={deleteImg}
                alt=""
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  // clickAction({action:"delete"})
                  setDeleteData(el.customer_id);
                  setDeletePopUp(true);
                  // alert("delete");
                }}
              /> */}
              <CheckIcon
                color={el?.markRead ? "primary" : ""}
                onClick={() => {
                  if (el?.markRead) {
                  } else {
                    markAsSolved(el.id);
                  }
                }}
                sx={{
                  cursor: "pointer",
                }}
              />
              <DeleteIcon
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  deletefunctions(el.id);
                }}
              />
            </div>
          ),
        }))
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deletefunctions = async (id) => {
    const resData = await db.collection("formData").doc(id).delete();
    fetchData();

    setDeleteData("");
  };
  const clickAction = (data) => {
    console.log(data);
    let temp = [...extraStateForData];
    if (data) {
      temp.sort((a, b) => {
        if (data == "ascending") {
          return a["date"]?.seconds < b["date"]?.seconds ? 1 : -1;
        }
        if (data == "descending") {
          return b["date"]?.seconds < a["date"]?.seconds ? 1 : -1;
        }
      });
    }
    console.log(temp);
    console.log(temp.map((el) => el?.date?.seconds));
    if (data) {
      fetchDataLocal(temp);
    }
  };

  const markAsSolved = async (id) => {
    const resData = await db.collection("formData").doc(id).update({
      markRead: true,
    });
    fetchData();
  };
  return (
    <SideBar>
      <LoadingScreen open={loading} />
      {/* <DeletePopUp
        open={deletePopUp}
        onClose={() => {
          setDeletePopUp(false);
        }}
        deleteFunction={() => {
          deletefunctions();
        }}
      /> */}

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          mt: "30px",
        }}
      >
        <Box>
          <input
            type="text"
            placeholder="user email"
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
            value={filterEmail}
            onChange={(e) => {
              setfilterEmail(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            startIcon={<FilterAltIcon />}
            onClick={filterByEmail}
          >
            <Typography variant="button"> Filter</Typography>
          </Button>
        </Box>

        <Box>
          <Button
            variant="contained"
            startIcon={<FilterAltOffIcon />}
            onClick={() => {
              fetchDataLocal(extraStateForData);
              setfilterEmail("");
            }}
          >
            <Typography variant="button"> Clear Filter</Typography>
          </Button>
        </Box>
        <Box>
          <select
            name=""
            id=""
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
              clickAction(e.target.value);
            }}
          >
            <option value=""> sort by date</option>
            <option value="ascending"> Ascending</option>
            <option value="descending"> Descending</option>
          </select>
        </Box>
        <Box>
          <Button
            variant="contained"
            startIcon={<ClearIcon />}
            onClick={() => {
              fetchDataLocal(extraStateForData);
              setfilterEmail("");
            }}
          >
            <Typography variant="button">Clear Sort</Typography>
          </Button>
        </Box>
      </Box>
      <TableBox
        columns={columns}
        data={dataModified}
        onclickAction={(data) => {}}
      />
    </SideBar>
  );
}
