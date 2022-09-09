import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const ProfileFamousPerson = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState([]);
  const navigate = useNavigate();
  //console.log(personId);

  async function handeleData() {
    const response = await axios.get(
      `http://localhost:8888/person/persondetail/${personId}`
    );
    //console.log(response);
    setPerson(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);

  //console.log(person);

  const showListMovieDirector = () => {
    return person[0]?.directors.map((director) => {
      if (person[0]?.directors.length > 0) {
        return (
          <div
            className="w-[120px] h-[160px] cursor-pointer  hover:text-[#00FF00] mt-1"
            key={director?.movie_id}
          >
            <img
              src={director?.poster}
              alt={director?.title}
              className="w-full h-full  object-cover rounded-2xl border border-primary hover:border-[0px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[-4px_4px_16px_#00FFFF,_4px_-4px_16px_#00FF00]"
              onClick={() => {
                navigate(`/movie/${director?.movie_id}`);
              }}
            />
            <label
              className="block mt-2 text-sm cursor-pointer"
              onClick={() => {
                navigate(`/movie/${director?.movie_id}`);
              }}
            >
              {director?.title}
            </label>
          </div>
        );
      } else return <span className="text-2xl text-white">Chưa cập nhật</span>;
    });
  };

  const showListMovieActor = () => {
    return person[0]?.actors.map((actor) => {
      if (person[0]?.actors.length > 0) {
        return (
          <div
            className="w-[120px] h-[160px] cursor-pointer  hover:text-[#00FF00] mt-1"
            key={actor?.movie_id}
          >
            <img
              src={actor?.poster}
              alt={actor?.title}
              className="w-full h-full  object-cover rounded-2xl border border-primary hover:border-[0px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[-4px_4px_16px_#00FFFF,_4px_-4px_16px_#00FF00]"
              onClick={() => {
                navigate(`/movie/${actor?.movie_id}`);
              }}
            />
            <label
              className="block mt-2 text-sm cursor-pointer"
              onClick={() => {
                navigate(`/movie/${actor?.movie_id}`);
              }}
            >
              {actor?.title}
            </label>
          </div>
        );
      } else return <span className="text-2xl text-white">Chưa cập nhật</span>;
    });
  };

  return (
    <div className=" min-h-screen grid grid-cols-[550px,1fr] backdrop-blur-md text-white mt-[70px] ">
      <div className=" w-[500px] h-full overflow-hidden">
        <img
          src={person[0]?.avatar}
          alt=""
          className="w-[500px] h-[700px] overflow-hidden  transition-all ease-in-out delay-750 hover:scale-125 hover:rotate-3"
        />
      </div>
      <div className="pt-3 pl-3 info">
        <div className="my-5 py-2 text-6xl font-bold bg-[linear-gradient(45deg,#00FFFF,#00FF00)] bg-clip-text text-transparent">
          {person[0]?.name}
        </div>
        {/* <div className="my-5 text-xl font-bold bg-[linear-gradient(45deg,#00FFFF,#00FF00)] bg-clip-text text-transparent">
          titleenglish
        </div> */}
        <div className="my-8 mr-8">
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Năm sinh
            </label>
            <span className="text-2xl">
              {moment(person[0]?.birthday).utc().format("DD/MM/YYYY")}
            </span>
          </div>
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Quốc tịch
            </label>
            <span className="text-2xl">{person[0]?.nation}</span>
          </div>
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Giới tính
            </label>
            <span className="text-2xl">{person[0]?.gender}</span>
          </div>
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Lượt theo dõi
            </label>
            <span className="text-2xl">0</span>
          </div>
        </div>
        <div className="my-8 mr-8 movie-description">{person[0]?.career}</div>
        <div className="my-8 mr-8 movie-cast">
          <h3 className="text-3xl font-medium text-blue-500">
            DIỄN VIÊN TRONG CÁC BỘ PHIM
          </h3>
          <div className="grid grid-cols-8 gap-5">
            {showListMovieDirector()}
          </div>
        </div>
        <div className="my-8 mr-8 movie-cast">
          <h3 className="mt-20 text-3xl font-medium text-blue-500">
            ĐẠO DIỄN TRONG CÁC BỘ PHIM
          </h3>
          <div className="grid grid-cols-8 gap-5 mb-5">
            {showListMovieActor()}
          </div>
          {/* {trailerMovie()} */}
        </div>
      </div>
    </div>
  );
};

export default ProfileFamousPerson;
