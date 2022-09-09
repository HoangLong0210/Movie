import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import BannerItem from "./BannerItem";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  async function handeleData() {
    const response = await axios.get("http://localhost:8888/movie/all");
    //console.log(response.data.data[0]);
    setMovies([...response.data.data]);
  }

  useEffect(() => {
    handeleData();
  }, []);
  return (
    <section className="banner w-[1000px] h-[700px] page-container overflow-hidden mb-20 mt-[70px] select-none">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item, index) => (
            <SwiperSlide key={item.movie_id}>
              <BannerItem props={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
