import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comment from "../components/comment/Comment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "../components/movie/MovieCard";
import SeriesCard from "../components/movie/SeriesCard";

const MovieWatchPage = () => {
  const [episode, setEpisode] = useState([]);
  const [movie, setMovie] = useState([]);
  const [list, setList] = useState([]);
  const { movieId, episodeMovie } = useParams();
  //console.log(episode);

  async function handeleData() {
    const response = await axios.get(
      `http://localhost:8888/episode/detail/${movieId}/${episodeMovie}`
    );

    const movieSimilar = await axios.get(
      `http://localhost:8888/movie/relate-movie/${movieId}`
    );

    const episodeList = await axios.get(
      `http://localhost:8888/movie/series/${movieId}`
    );
    //console.log(response);
    setEpisode(response.data.data);
    setMovie(...movieSimilar?.data?.data);
    setList(episodeList.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);

  function MovieSimilar() {
    return (
      <div className="py-10">
        <h2 className="mb-10 text-4xl font-bold text-center text-blue-400">
          SIMILAR MOVIES
        </h2>

        <div className="movie-list">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {movie.length > 0 &&
              movie.map((item) => (
                <SwiperSlide key={item?.movie_id}>
                  <MovieCard props={item}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    );
  }
  console.log(episode);

  const showEpisode = () => {
    if (list?.length > 0) {
      return (
        <h3 className="flex justify-center my-5 text-2xl font-bold">
          Tập {episode[0]?.episode_movie}
        </h3>
      );
    } else return null;
  };

  function EpisodeSimilar() {
    if (list?.length > 0) {
      return (
        <div className="py-10">
          <h2 className="mb-10 text-4xl font-bold text-center text-blue-400">
            CÁC TẬP PHIM KHÁC
          </h2>

          <div className="movie-list">
            <Swiper
              grabCursor={"true"}
              spaceBetween={40}
              slidesPerView={"auto"}
            >
              {list.length > 0 &&
                list.map((item) => (
                  <SwiperSlide key={item?.episode_movie}>
                    <SeriesCard props={item}></SeriesCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="mt-[70px] ">
      <div>
        <iframe
          width="1900"
          height="800"
          src={episode[0]?.url_movie}
          title="Spider-Man: No Way Home | Official Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2 className="flex justify-center my-5 text-4xl font-bold">
          {episode[0]?.movie?.title}
        </h2>
        {showEpisode()}
      </div>

      <EpisodeSimilar></EpisodeSimilar>
      <MovieSimilar></MovieSimilar>
      <Comment></Comment>
    </div>
  );
};

export default MovieWatchPage;
