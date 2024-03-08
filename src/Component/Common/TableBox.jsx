import { Box } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

import "./TableBox.css";

// import upImg from "../../../utilities/Icons/courseIcons/tableSortUp.png";

// import downImg from "../../../utilities/Icons/courseIcons/tableSortDown.png";

export default function TableBox({ columns, data, onclickAction }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Box
      sx={{
        // width: "77vw",
        overflowX: "scroll",
        overflow: "scroll",
        height: "57vh",
      }}
    >
      <table
        {...getTableProps()}
        className="tableBox"
        style={{
          width: "100%",
          overflowX: "scroll",
          overflowY: "scroll",
          textAlign: "left",
          borderCollapse: "collapse",
        }}
      >
        <thead
          style={{
            position: "sticky",
            top: "0px",
            height: "56px",
            color: "#1B1D1F",
            background: "#E9F0F4",
            zIndex: "2",
            margin: "0px 15px 15px 15px",
          }}
        >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    width: columns[index].width,
                    fontSize: "14px",
                    fontFamily: "Poppins,sans-serif",
                    paddingLeft: "10px",
                  }}
                  className="Tableth"
                >
                  {/* {columns[index].width} */}

                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    {/* {column.render("Header")} */}
                    <div>{column.render("Header")}</div>
                    {/* <div
                      style={{
                        display: index == columns.length - 1 ? "none" : "grid",
                        justifyItems: "center",
                        alignContent: "center",
                        gridGap: "5px",
                        gridTemplateColumns: "1fr",
                      }}
                    >
                      <img
                        src={upImg}
                        alt=""
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          onclickAction({
                            action: "sortup",
                            column: columns[index].Header,
                          });
                          // alert(columns[index].Header);
                        }}
                      />
                      <img
                        src={downImg}
                        alt=""
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          onclickAction({
                            action: "sortdown",
                            column: columns[index].Header,
                          });

                          // alert(columns[index].Header);
                        }}
                      />
                    </div> */}
                  </div>
                </th>
              ))}
            </tr>
          ))}
          <tr
            style={{
              borderCollapse: "collapse",
              background: "black",
              padding: "10px",
              height: "12px",
              marginTop: "12px",
            }}
          ></tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <>
                <tr
                  {...row.getRowProps()}
                  style={{
                    borderCollapse: "collapse",
                    background: "#FFFFFF",
                    padding: "10px",
                    height: "43px",
                    marginTop: "12px",
                    borderRadius: "12px",
                    color: "#1B1D1F",
                    fontSize: "14px",
                    fontFamily: "Poppins,sans-serif",
                    fontWeight: "400",
                    // lineHeight: 20,
                    wordWrap: "break-word",
                  }}
                >
                  {row.cells.map((cell, index) => (
                    <td
                      className="Tabletd"
                      {...cell.getCellProps()}
                      style={{
                        width: columns[index].width,
                        paddingLeft: "10px",
                        // border: "2px solid red",
                        // borderRadius: "40px",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
                <tr
                  style={{
                    borderCollapse: "collapse",
                    backgroundColor: "yellow",
                    border: "1px solid black",
                    padding: "10px",
                    height: "1px",
                    marginTop: "12px",
                  }}
                ></tr>
              </>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
