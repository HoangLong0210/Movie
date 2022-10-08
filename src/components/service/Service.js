import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const [service, setService] = useState([]);
  //console.log(movieId);
  async function handeleData() {
    const response = await axios.get(`http://localhost:8888/service/all`);
    //console.log(response);
    setService(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);
  console.log(service);

  return (
    <div className="mt-[70px]">
      <h2 className="flex justify-center mt-32 text-3xl ">CÁC GÓI DỊCH VỤ</h2>
      <div className="grid grid-cols-5 gap-20 p-20">
        {service.length > 0 &&
          service.map((item, index) => (
            <div
              className="h-48 border rounded-lg w-80 border-primary"
              key={item.service_id}
            >
              <div className="p-3">
                <h3 className="inline-block mr-10">LOẠI DỊCH VỤ: </h3>
                <span>{item.service_type}</span>
              </div>
              <div className="p-3">
                <h3 className="inline-block mr-10">THỜI GIAN SỬ DỤNG: </h3>
                <span>{item.timeuse}</span>
              </div>
              <div className="p-3">
                <h3 className="inline-block mr-10">GIÁ: </h3>
                <span>{item.cost}</span>
              </div>
              <div className="p-3 my-1">
                <h3 className="inline-block mr-10">MÔ TẢ: </h3>
                <span>Xem được các loại phim </span>
              </div>
              <button
                key={{ index }}
                onClick={() => navigate(`/payment/${index + 1}`)}
                className="w-full px-6 py-3 my-5 mt-auto text-xl capitalize rounded-lg bg-primary"
              >
                CHỌN
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Service;
