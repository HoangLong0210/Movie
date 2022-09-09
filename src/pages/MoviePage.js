import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  async function handeleData() {
    const response = await axios.get(`http://localhost:8888/movie/list/all`);
    setMovie(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);
  //console.log(movie);

  return (
    <div className="py-10 mt-[70px] page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white outline-none rounded-xl bg-slate-800"
            placeholder="Tìm theo tên phim, tên diễn viên..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {/* <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> */}
      </div>
      {/* <section className="mb-20 page-container">
        <div className="relative flex">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
            HÀNH ĐỘNG
          </h2>
          <button className="absolute right-0 justify-end w-24 h-10 text-xl italic bg-black rounded-xl hover:bg-primary">
            View all
          </button>
        </div>
        <MovieList></MovieList>
      </section> */}
      <div className="grid grid-cols-4 gap-10">
        {movie.length > 0 &&
          movie
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.titleenglish
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.nation.toLowerCase().includes(search.toLowerCase())
              )
                return item;
            })
            .map((item) => (
              <MovieCard key={item.movie_id} props={item}></MovieCard>
            ))}
      </div>
    </div>
  );
};

export default MoviePage;
