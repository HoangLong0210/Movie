import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="w-[500px] min-h-[100vh-56px] flex justify-center ml-[-16px] mb-[-80px] relative">
      <div className="bg-[#202451] rounded flex p-10 w-full flex-col justify-center items-center absolute top-[200px] left-[800px]">
        <h1 className="mb-2 text-3xl text-white ">RESET MẬT KHẨU</h1>
        <h2 className="mt-10">CHỌN CÁCH RESET MẬT KHẨU BẰNG</h2>
        <Link
          to="withemail"
          className="flex justify-center w-full p-5 mt-5 font-semibold text-white bg-red-500 rounded-lg hover:bg-primary"
        >
          EMAIL
        </Link>
        <Link
          to="withphone"
          className="flex justify-center w-full p-5 mt-5 font-semibold text-white bg-red-500 rounded-lg hover:bg-primary"
        >
          SỐ ĐIỆN THOẠI
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
