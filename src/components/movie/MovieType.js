import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieType = () => {
  const { genreId } = useParams();
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  async function handeleData() {
    const response = await axios.get(
      `http://localhost:8888/genre/list/${genreId}`
    );
    setMovie(response.data.data);
  }

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

export default MovieType;
