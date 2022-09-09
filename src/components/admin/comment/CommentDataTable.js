import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const CommentDataTable = () => {
  const [pageSize, setPageSize] = useState(5);

  const row = [
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
    {
      id: 1,
      title: "Người nhện không còn nhà",
      titleEnglish: "Spoderman No Way Home",
      name: "Phan Đình Hoàng Long",
      content: "Phim dở tệ hại, phí tiền đi xem vkl",
      createAt: "26/8/2022",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "TÊN PHIM", width: 300 },
    { field: "titleEnglish", headerName: "TÊN PHIM TIẾNG ANH", width: 300 },
    { field: "name", headerName: "TÊN", width: 200 },
    { field: "content", headerName: "NỘI DUNG BÌNH LUẬN", width: 450 },
    { field: "createAt", headerName: "NGÀY BÌNH LUẬN", width: 150 },
  ];

  const actionColum = [
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="outlined"
              //onClick={}
              className="flex items-center justify-center w-[100px] h-10 bg-blue-500 rounded-lg cursor-pointer hover:bg-primary"
            >
              XEM
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 850, width: "100%" }}>
      <DataGrid
        rowHeight={180}
        sx={{
          color: "white",
        }}
        pageSize={pageSize}
        rows={row}
        columns={columns.concat(actionColum)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15]}
        pagination
      />
    </div>
  );
};

export default CommentDataTable;
