import React, { useEffect, useMemo, useState } from "react";
// import viewImg from "../../../utilities/Icons/courseIcons/view.png";
import DeleteIcon from "@mui/icons-material/Delete";

// import deleteImg from "../../../utilities/Icons/courseIcons/delete.png";

import { tableData } from "./homedata";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../Common/LoadingScreen";
import TableBox from "../Common/TableBox";
import SideBar from "./SideBar/SideBar";
// import useGetApiCalls from "../../../Config/GetApiHook";
// import LoadingScreen from "../../../Config/LoadingScreen";
// import deleteDataAPI from "../../../Config/DeleteAPi";
// import DeletePopUp from "../Questions/DeletePopUp";
export default function HomeTable() {
  const [dataModified, setData] = useState([]);
  const [loading, setloading] = useState(false);
  // const { data, error, loading, fetchData } = useGetApiCalls();
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name", width: "15%" },
      { Header: "NDIS no.", accessor: "ndis", width: "12%" },
      { Header: "Gender", accessor: "gender", width: "10%" },
      { Header: "Age", accessor: "age", width: "10%" },
      {
        Header: "Recent assessment",
        accessor: "last_visiting_date",
        width: "20%",
      },
      {
        Header: "Recent report",
        accessor: "date_of_report",
        width: "20%",
      },

      // { Header: "State", accessor: "state" },
      // { Header: "City", accessor: "city" },
      // { Header: "Address", accessor: "address" },
      { Header: "Action", accessor: "action", width: "10%" },
    ],
    []
  );

  useEffect(() => {
    // fetchData({
    //   url: "customer/customers/list",
    //   query: { page: 1 },
    // });
    // customer/customers/list?page=1
  }, []);
  useEffect(() => {
    fetchDataLocal();
    // customer/customers/list?page=1
  }, [tableData]);

  const fetchDataLocal = async () => {
    try {
      const agents = tableData;
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
              <DeleteIcon />
            </div>
          ),
        }))
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deletefunctions = async (id) => {
    // await deleteDataAPI({
    //   url: "customer",
    //   data: { customer_id: deleteData },
    // });
    // setDeletePopUp(false);
    // fetchData({
    //   url: "customer/customers/list",
    //   query: { page: 1 },
    // });

    setDeleteData("");
  };
  const clickAction = (data) => {
    let orderBy = "customer_id";
    let order = "DESC";
    if (data.action) {
      order = data.action;
    }
    if (data.column) {
      orderBy =
        data.column == "Name"
          ? "name"
          : data.column == "NDIS no."
          ? "ndis"
          : data.column == "Gender"
          ? "gender"
          : data.column == "Age"
          ? "age"
          : data.column == "Recent assessment"
          ? "last_visiting_date"
          : data.column == "Recent report"
          ? "date_of_report"
          : "customer_id";
    }

    setData([]);

    let temp = [...dataModified];

    temp.sort((a, b) => {
      if (order == "sortdown") {
        return a[orderBy] < b[orderBy] ? 1 : -1;
      }
      if (order == "sortup") {
        return b[orderBy] < a[orderBy] ? 1 : -1;
      }
    });
    console.log(temp);
    setData(temp);
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
      <TableBox
        columns={columns}
        data={dataModified}
        onclickAction={(data) => {
          clickAction(data);
        }}
      />
    </SideBar>
  );
}
