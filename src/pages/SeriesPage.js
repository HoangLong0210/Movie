import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";

const SeriesPage = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  async function handeleData() {
    const response = await axios.get(`http://localhost:8888/movie/series/all`);
    setMovie(response.data.data);
  }
  console.log(movie);

  useEffect(() => {
    handeleData();
  }, []);
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
      </div>

      <div className="grid grid-cols-4 gap-10">
        {movie &&
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

export default SeriesPage;
