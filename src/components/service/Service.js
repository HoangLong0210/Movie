import axios from "axios";
import React, { useEffect, useState } from "react";

const Service = () => {
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
      <h2 className="text-3xl flex justify-center mt-32 ">CÁC GÓI DỊCH VỤ</h2>
      <div className="p-20 cursor-pointer grid grid-cols-5 gap-10">
        {service.length > 0 &&
          // eslint-disable-next-line array-callback-return
          service.map((item) => (
            <div
              className="w-80 h-48 rounded-lg border border-primary"
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
              <div className="p-3">
                <h3 className="inline-block mr-10">MÔ TẢ: </h3>
                <span>Xem được các loại phim </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Service;
