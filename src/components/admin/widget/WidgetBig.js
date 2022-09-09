import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const WidgetBig = () => {
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData(1, "Spiderman: No way home", "Phim lẻ", 8),
    createData(1, "Spiderman: No way home", "Phim lẻ", 8),
    createData(1, "Spiderman: No way home", "Phim lẻ", 8),
    createData(1, "Spiderman: No way home", "Phim lẻ", 8),
  ];
  return (
    <div className="pl-10 columns-2 grid-rows-2">
      <div className="w-[775px] h-[325px] bg-border rounded-xl relative">
        <div className="h-[60px] border-b border-border_secondary flex items-center ">
          <div className="flex p-5">
            <i className="fa-solid fa-film"></i>
            <h2 className="ml-3 text-lg">TOP RATING MOVIE</h2>
          </div>
          <div className="flex items-center w-20 h-10 bg-black rounded-3xl justify-center absolute right-5 cursor-pointer hover:text-blue-600">
            View all
          </div>
        </div>
        <TableContainer component={Paper} className="table">
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="bg-border border-b border-border_secondary"
          >
            <TableHead>
              <TableRow
                sx={{
                  "& th": { color: "white" },
                }}
              >
                <TableCell
                  sx={{
                    color: "white",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                  }}
                  align="left"
                >
                  TÊN PHIM
                </TableCell>
                <TableCell align="left">LOẠI PHIM</TableCell>
                <TableCell align="left">ĐÁNH GIÁ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    <div>
                      {row.carbs}
                      <i className="fa-solid fa-star ml-2 text-blue-500"></i>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="w-[775px] h-[325px] bg-border rounded-xl mt-5 relative ">
        <div className="h-[60px] border-b border-border_secondary flex items-center ">
          <div className="flex p-5">
            <i className="fa-solid fa-user-secret"></i>
            <h2 className="ml-3 text-lg">TOP ĐẠO DIỄN</h2>
          </div>
          <div className="flex items-center w-20 h-10 bg-black rounded-3xl justify-center absolute right-5 cursor-pointer hover:text-blue-600">
            View all
          </div>
        </div>
        <TableContainer component={Paper} className="table">
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="bg-border border-b border-border_secondary"
          >
            <TableHead>
              <TableRow
                sx={{
                  "& th": { color: "white" },
                }}
              >
                <TableCell
                  sx={{
                    color: "white",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                  }}
                  align="left"
                >
                  TÊN ĐẠO DIỄN
                </TableCell>
                <TableCell align="left">GIỚI TÍNH</TableCell>
                <TableCell align="left">SỐ LẦN ĐÓNG GÓP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.carbs}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="w-[775px] h-[325px] bg-border rounded-xl ml-[-10px] relative">
        <div className="h-[60px] border-b border-border_secondary flex items-center ">
          <div className="flex p-5">
            <i className="fa-brands fa-servicestack"></i>
            <h2 className="ml-3 text-lg">TOP LOẠI DỊCH VỤ</h2>
          </div>
          <div className="flex items-center w-20 h-10 bg-black rounded-3xl justify-center absolute right-5 cursor-pointer hover:text-blue-600">
            View all
          </div>
        </div>
        <TableContainer component={Paper} className="table">
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="bg-border border-b border-border_secondary"
          >
            <TableHead>
              <TableRow
                sx={{
                  "& th": { color: "white" },
                }}
              >
                <TableCell
                  sx={{
                    color: "white",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                  }}
                  align="left"
                >
                  LOẠI SERVICE
                </TableCell>
                <TableCell align="left">SỐ LƯỢNG MUA</TableCell>
                <TableCell align="left">TỔNG TIỀN</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.carbs}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="w-[775px] h-[325px] bg-border rounded-xl mt-5 ml-[-10px] relative">
        <div className="h-[60px] border-b border-border_secondary flex items-center ">
          <div className="flex p-5">
            <i className="fa-solid fa-user-vneck"></i>
            <h2 className="ml-3 text-lg">TOP DIỄN VIÊN</h2>
          </div>
          <div className="flex items-center w-20 h-10 bg-black rounded-3xl justify-center absolute right-5 cursor-pointer hover:text-blue-600">
            View all
          </div>
        </div>
        <TableContainer component={Paper} className="table">
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="bg-border border-b border-border_secondary"
          >
            <TableHead>
              <TableRow
                sx={{
                  "& th": { color: "white" },
                }}
              >
                <TableCell
                  sx={{
                    color: "white",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                  }}
                  align="left"
                >
                  TÊN PHIM
                </TableCell>
                <TableCell align="left">LOẠI PHIM</TableCell>
                <TableCell align="left">ĐÁNH GIÁ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.calories}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "#484775",
                    }}
                    align="left"
                  >
                    {row.carbs}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default WidgetBig;
