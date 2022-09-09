import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AddMovie = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [titleenglish, setTitleEnglish] = useState("");
  const [releasemovie, setReleaseMovie] = useState("");
  const [nation, setNation] = useState("");
  const [typeservice, setTypeService] = useState("");
  const [url_trailer, setUrlTrailer] = useState("");
  const [typemovie, setTypeMovie] = useState("");
  const [status_movie, setStatusMovie] = useState("");

  const navigate = useNavigate();

  const data = {
    id: id,
    title: title,
    titleenglish: titleenglish,
    releasemovie: releasemovie,
    nation: nation,
    typeservice: typeservice,
    url_trailer: url_trailer,
    typemovie: typemovie,
    status_movie: status_movie,
  };

  function Submit(e) {
    e.prevenDefault();
    axios
      .post("http://localhost:8888/movie", data)
      .then(navigate("/admin/movie"));
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
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="ID"
                placeholder="ID PHIM"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="TÊN PHIM"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                value={titleenglish}
                onChange={(e) => setTitleEnglish(e.target.value)}
                type="text"
                placeholder="TÊN PHIM TIẾNG ANH"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                value={releasemovie}
                onChange={(e) => setReleaseMovie(e.target.value)}
                type="text"
                placeholder="NĂM PHÁT HÀNH"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                value={nation}
                onChange={(e) => setNation(e.target.value)}
                type="text"
                placeholder="QUỐC GIA"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                value={typeservice}
                onChange={(e) => setTypeService(e.target.value)}
                type="text"
                placeholder="LOẠI DỊCH VỤ"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                value={url_trailer}
                onChange={(e) => setUrlTrailer(e.target.value)}
                type="text"
                placeholder="TRAILER"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                value={typemovie}
                onChange={(e) => setTypeMovie(e.target.value)}
                type="text"
                placeholder="LOẠI PHIM"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <input
                value={status_movie}
                onChange={(e) => setStatusMovie(e.target.value)}
                type="text"
                placeholder="TRẠNG THÁI"
                className="w-[40%] bg-white/10 text-xl rounded-lg outline-none py-4 pl-6 border border-white mt-4"
              />
              <button
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
