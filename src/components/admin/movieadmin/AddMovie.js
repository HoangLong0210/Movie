import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AddMovie = () => {
  const [values, setValues] = useState({
    movie_id: "",
    title: "",
    titleenglish: "",
    releasemovie: "",
    nation: "",
    typeservice: "",
    url_trailer: "",
    typemovie: "",
    status_movie: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  function Submit(e) {
    e.prevenDefault();
    axios.post("http://localhost:8888/movie");
  }

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="bg-[#131720] border flex-[6] border-border">
        <div className=" bg-[#131720] flex-1 relative h-full">
          <div className="flex items-center justify-center h-20 border border-border">
            <h1 className="absolute text-4xl left-5">ADD MOVIE</h1>
          </div>
          <div>
            <div className="absolute flex-1 right-20 top-5">
              <Link
                to="/admin/movie/add"
                className="flex items-center justify-center h-10 text-xl bg-blue-600 w-36 hover:bg-primary rounded-3xl"
              >
                ADD MOVIE
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-[calc(100%-80px)]">
            <form className="w-[80%] h-full flex flex-col justify-center items-center">
              <input
                onChange={handleInputChange}
                name="movie_id"
                type="ID"
                placeholder="ID PHIM"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                onChange={handleInputChange}
                name="title"
                type="text"
                placeholder="TÊN PHIM"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                onChange={handleInputChange}
                name="titleenglish"
                type="text"
                placeholder="TÊN PHIM TIẾNG ANH"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                onChange={handleInputChange}
                name="releasemovie"
                type="text"
                placeholder="NĂM PHÁT HÀNH"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                onChange={handleInputChange}
                name="nation"
                type="text"
                placeholder="QUỐC GIA"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                onChange={handleInputChange}
                name="typeservice"
                type="text"
                placeholder="LOẠI DỊCH VỤ"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                onChange={handleInputChange}
                name="url_trailer"
                type="text"
                placeholder="TRAILER"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                onChange={handleInputChange}
                name="typemovie"
                type="text"
                placeholder="LOẠI PHIM"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                onChange={handleInputChange}
                name="status_movie"
                type="text"
                placeholder="TRẠNG THÁI"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <button
                type="submit"
                className="w-[40%] bg-blue-600 hover:bg-primary text-xl rounded-lg py-4 pl-6 border border-white mt-4"
                onClick={Submit}
              >
                THÊM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
