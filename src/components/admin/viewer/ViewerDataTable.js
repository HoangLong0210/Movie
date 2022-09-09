import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const ViewerDataTable = () => {
  const [viewer, setViewer] = useState([]);
  const [search, setSearch] = useState("");

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  async function handeleData() {
    const response = await axios.get("http://localhost:8888/viewer/all");
    //console.log(response);
    setViewer(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);
  console.log(viewer);

  return (
    <div>
      <input
        type="text"
        className="h-10 p-4 text-white outline-none w-68 rounded-xl bg-slate-800  absolute right-[700px] -mt-16"
        placeholder="Tìm kiếm theo tên người dùng..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 700,
            bgcolor: "#151f30",
            color: "white",
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">TÊN</StyledTableCell>
              <StyledTableCell align="center">SỐ ĐIỆN THOẠI</StyledTableCell>
              <StyledTableCell align="center">ẢNH ĐẠI DIỆN</StyledTableCell>
              <StyledTableCell align="center">EMAIL</StyledTableCell>
              <StyledTableCell align="center">ĐỊA CHỈ</StyledTableCell>
              <StyledTableCell align="center">GIỚI TÍNH</StyledTableCell>
              <StyledTableCell align="center">ACTIONS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {viewer
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.address.toLowerCase().includes(search.toLowerCase()) ||
                  item.gender.toLowerCase().includes(search.toLowerCase()) ||
                  item.phone.toLowerCase().includes(search.toLowerCase()) ||
                  item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.email.toLowerCase().includes(search.toLowerCase())
                )
                  return item;
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.viewer_id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                    >
                      {item.viewer_id}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.phone}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {
                        <img
                          src={item.avatar}
                          className="w-[150px] h-[150px] rounded-lg"
                        />
                      }
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                    >
                      {item.email}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.address}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.gender}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      <div>
                        <button className="w-[100px] h-12 cursor-pointer rounded-2xl bg-blue-500 hover:bg-primary mr-5">
                          XEM
                        </button>
                        <button className="w-[100px] h-12 cursor-pointer rounded-2xl bg-blue-500 hover:bg-primary">
                          CHỈNH SỬA
                        </button>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ViewerDataTable;
