import React from "react";

const ProfileViewer = () => {
  return (
    <div className=" min-h-screen grid grid-cols-[1000px,1fr] backdrop-blur-md text-white mt-[70px] ">
      <div className=" w-[600px] h-full overflow-hidden ml-[250px]">
        <img
          src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/resting-images.jpg"
          alt=""
          className="w-[600px] h-[700px] rounded-xl"
        />
        <div className="mt-10">
          <button className="h-16 text-3xl bg-blue-600 rounded-lg w-[200px] mr-24 hover:bg-primary">
            CHỈNH SỬA
          </button>
          <button className="h-16 text-3xl bg-blue-600 rounded-lg w-[200px] hover:bg-primary">
            LƯU
          </button>
        </div>
      </div>
      <div className="pt-3 pl-3 info">
        <div className="my-5 py-2 text-6xl font-bold bg-[linear-gradient(45deg,#00FFFF,#00FF00)] bg-clip-text text-transparent">
          THÔNG TIN CÁ NHÂN
        </div>

        <div className="my-8 mr-8">
          <div className="my-10">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Họ tên
            </label>
            <span className="text-2xl">Phan Đình Hoàng Long</span>
          </div>
          <div className="my-10">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Ngày sinh
            </label>
            <span className="text-2xl">2/10/2000</span>
          </div>
          <div className="my-10">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Email
            </label>
            <span className="text-2xl">abc@gmail.com</span>
          </div>
          <div className="my-10">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Password
            </label>
            <span className="text-2xl">long123</span>
          </div>
          <div className="my-10">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Số điện thoại
            </label>
            <span className="text-2xl">0969772427</span>
          </div>
          <div className="my-10">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Địa chỉ
            </label>
            <span className="text-2xl">Quận 1</span>
          </div>
          <div className="my-10">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Giới tính
            </label>
            <span className="text-2xl">Nam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewer;
