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

const ServiceDataTable = () => {
  const [service, setService] = useState([]);
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
    const response = await axios.get("http://localhost:8888/service/all");
    //console.log(response);
    setService(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);

  console.log(service);

  return (
    <div>
      <div>
        <input
          type="text"
          className="h-10 p-4 text-white outline-none w-68 rounded-xl bg-slate-800  absolute right-[700px] mb-10 -mt-16"
          placeholder="Tìm kiếm theo tên dịch vụ..."
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
                <StyledTableCell align="center">LOẠI DỊCH VỤ</StyledTableCell>
                <StyledTableCell align="center">
                  THỜI GIAN SỬ DỤNG
                </StyledTableCell>
                <StyledTableCell align="center">GIÁ TIỀN</StyledTableCell>
                <StyledTableCell align="center">ACTIONS</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {service
                .filter((item) => {
                  if (search == "") {
                    return item;
                  } else if (
                    item.service_type
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.cost.toLowerCase().includes(search.toLowerCase())
                  )
                    return item;
                })
                .map((item) => {
                  return (
                    <StyledTableRow key={item.service_id}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{
                          color: "white",
                          borderBottom: "#484775",
                        }}
                      >
                        {item.service_id}
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{
                          color: "white",
                          borderBottom: "#484775",
                        }}
                        align="center"
                      >
                        {item.service_type}
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{
                          color: "white",
                          borderBottom: "#484775",
                        }}
                        align="center"
                      >
                        {item.timeuse}
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{
                          color: "white",
                          borderBottom: "#484775",
                        }}
                        align="center"
                      >
                        {item.cost}
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
    </div>
  );
};

export default ServiceDataTable;
