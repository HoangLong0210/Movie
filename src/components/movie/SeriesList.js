import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import SeriesCard from "./SeriesCard";

const SeriesList = () => {
  const [movies, setMovies] = useState([]);

  async function handeleData() {
    const response = await axios.get(`http://localhost:8888/movie/series/all`);
    //console.log(response.data.data[0]);
    setMovies([...response.data.data]);
  }

  useEffect(() => {
    handeleData();
  }, []);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.movie_id}>
              <SeriesCard props={item}></SeriesCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SeriesList;
