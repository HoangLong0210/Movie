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
import moment from "moment";

const PersonDataTable = () => {
  const [person, setPerson] = useState([]);
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
    const response = await axios.get("http://localhost:8888/person/all");
    //console.log(response);
    setPerson(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);

  // console.log(person);

  return (
    <div>
      <input
        type="text"
        className="h-10 p-4 text-white outline-none w-68 rounded-xl bg-slate-800  absolute right-[700px] -mt-16"
        placeholder="Tìm kiếm theo tên người nổi tiếng..."
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
              <StyledTableCell align="center">NGÀY SINH</StyledTableCell>
              <StyledTableCell align="center">AVATAR</StyledTableCell>
              <StyledTableCell align="center">QUỐC TỊCH</StyledTableCell>
              <StyledTableCell align="center">GIỚI TÍNH</StyledTableCell>
              <StyledTableCell align="center">SỰ NGHIỆP</StyledTableCell>
              <StyledTableCell align="center">ACTIONS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {person
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.nation.toLowerCase().includes(search.toLowerCase())
                )
                  return item;
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.person_id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                    >
                      {item.person_id}
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
                      {moment(item.birthday).utc().format("DD/MM/DDDD")}
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
                      {item.nation}
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
                        maxWidth: 700,
                      }}
                      align="center"
                    >
                      {item.career}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      <button className="w-[100px] h-12 cursor-pointer rounded-2xl bg-blue-500 hover:bg-primary">
                        CHỈNH SỬA
                      </button>
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

export default PersonDataTable;
