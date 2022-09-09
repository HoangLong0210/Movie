import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  async function handeleData() {
    const response = await axios.get("http://localhost:8888/movie/all");
    //console.log(response.data.data[0]);
    setMovies([...response.data.data]);
  }

  useEffect(() => {
    handeleData();
  }, []);

  // console.log(movies);

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.movie_id}>
              <MovieCard props={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
