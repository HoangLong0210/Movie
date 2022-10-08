import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const [service, setService] = useState([]);
  const { serviceId } = useParams();
  console.log(serviceId);

  async function handeleData() {
    const response = await axios.get(
      `http://localhost:8888/service/${serviceId}`
    );
    //console.log(response);
    setService(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);

  return <div className="mt-[70px]">trang thanh toan</div>;
};

export default Payment;
