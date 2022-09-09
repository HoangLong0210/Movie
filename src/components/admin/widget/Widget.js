import React from "react";

const Widget = () => {
  return (
    <div className="flex pl-10 py-7 gap-5">
      <div className=" w-[200px]  flex-1 p-3 justify-between h-[120px] bg-border rounded-2xl relative">
        <div className="text-lg m-2">Lượt xem mới trong tháng</div>
        <div className="text-3xl ml-2 my-4">
          <span>5678</span>
          <i className="fa-solid fa-eye absolute right-10"></i>
        </div>
      </div>
      <div className=" w-[200px]  flex-1 p-3 justify-between h-[120px] bg-border rounded-2xl relative">
        <div className="text-lg m-2">Lượt phim đã thêm tháng</div>
        <div className="text-3xl ml-2 my-4">
          <span>5678</span>
          <i className="fa-solid fa-film absolute right-10"></i>
        </div>
      </div>
      <div className=" w-[200px]  flex-1 p-3 justify-between h-[120px] bg-border rounded-2xl relative">
        <div className="text-lg m-2">Lượt bình luận mới trong tháng</div>
        <div className="text-3xl ml-2 my-4">
          <span>5678</span>
          <i className="fa-solid fa-comment-dots absolute right-10"></i>
        </div>
      </div>
      <div className=" w-[200px]  flex-1 p-3 justify-between h-[120px] bg-border rounded-2xl relative">
        <div className="text-lg m-2">Tổng đánh giá trong tháng</div>
        <div className="text-3xl ml-2 my-4">
          <span>5678</span>
          <i className="fa-solid fa-star absolute right-10"></i>
        </div>
      </div>
      <div className=" w-[200px]  flex-1 p-3 justify-between h-[120px] bg-border rounded-2xl relative">
        <div className="text-lg m-2">Tổng tiền trong tháng</div>
        <div className="text-3xl ml-2 my-4">
          <span>5678</span>
          <i className="fa-solid fa-dollar-sign absolute right-10"></i>
        </div>
      </div>
    </div>
  );
};

export default Widget;
