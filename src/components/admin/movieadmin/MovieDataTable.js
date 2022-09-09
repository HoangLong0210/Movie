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

const MovieDataTable = () => {
  const [movie, setMovie] = useState([]);
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
    const response = await axios.get("http://localhost:8888/movie/list/all");
    //console.log(response);
    setMovie(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);
  // console.log(movie);

  return (
    <div>
      <input
        type="text"
        className="h-10 p-4 text-white outline-none w-68 rounded-xl bg-slate-800  absolute right-[700px] -mt-16"
        placeholder="Tìm kiếm theo tên phim..."
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
              <StyledTableCell align="center">TÊN PHIM</StyledTableCell>
              <StyledTableCell align="center">TÊN TIẾNG ANH</StyledTableCell>
              <StyledTableCell align="center">POSTER</StyledTableCell>
              <StyledTableCell align="center">NĂM</StyledTableCell>
              <StyledTableCell align="center">QUỐC GIA</StyledTableCell>
              <StyledTableCell align="center">LOẠI DỊCH VỤ</StyledTableCell>
              <StyledTableCell align="center">TRAILER</StyledTableCell>
              <StyledTableCell align="center">LOẠI PHIM</StyledTableCell>
              <StyledTableCell align="center">TRẠNG THÁI</StyledTableCell>
              <StyledTableCell align="center">ACTIONS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movie
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(search.toLowerCase()) ||
                  item.titleenglish
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.nation.toLowerCase().includes(search.toLowerCase())
                )
                  return item;
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.movie_id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                    >
                      {item.movie_id}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.title}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.titleenglish}
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
                          src={item.poster}
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
                      {item.releasemovie}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
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
                      {item.typeservice}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.url_trailer}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.typemovie}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "white",
                        borderBottom: "#484775",
                      }}
                      align="center"
                    >
                      {item.status_movie}
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

export default MovieDataTable;
