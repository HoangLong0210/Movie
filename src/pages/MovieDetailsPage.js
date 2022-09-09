import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  //console.log(movieId);
  async function handeleData() {
    const response = await axios.get(
      `http://localhost:8888/movie/detail/${movieId}`
    );
    //console.log(response);
    setMovie(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);

  const showListGenre = () => {
    return movie[0]?.genres.map((genre) => {
      return (
        <span
          key={genre?.genre_id}
          className="px-4 py-2 mr-2 text-xl border rounded-md cursor-pointer hover:border-primary hover:text-primary"
          onClick={() => navigate(`/genre/${genre?.genre_id}`)}
        >
          {genre?.title}
        </span>
      );
    });
  };

  const trailerMovie = () => {
    return (
      <div className="py-10">
        <h2 className="mb-10 text-5xl font-bold text-blue-500">TRAILER</h2>
        <div>
          <iframe
            width="1280"
            height="720"
            src={movie[0]?.url_trailer}
            title="Spider-Man: No Way Home | Official Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  const showListDirector = () => {
    return movie[0]?.directors.map((director) => {
      //console.log(movie[0]?.directors.length);
      if (movie[0]?.directors.length > 0) {
        return (
          <div
            className="w-[120px] h-[160px] cursor-pointer  hover:text-[#00FF00] mt-1"
            key={director?.person_id}
          >
            <img
              src={director?.avatar}
              alt={director?.name}
              className="w-full h-full  object-cover rounded-2xl border border-primary hover:border-[0px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[-4px_4px_16px_#00FFFF,_4px_-4px_16px_#00FF00]"
              onClick={() => navigate(`/famousperson/${director?.person_id}`)}
            />
            <label
              className="block mt-2 cursor-pointer"
              onClick={() => navigate(`/famousperson/${director?.person_id}`)}
            >
              {director?.name}
            </label>
          </div>
        );
      } else return <span className="text-2xl text-white">Chưa cập nhật</span>;
    });
  };

  const showListActor = () => {
    return movie[0]?.actors.map((actor) => {
      return (
        <div
          className="w-[120px] h-[160px] cursor-pointer  hover:text-[#00FF00] mt-1"
          key={actor.person_id}
        >
          <img
            src={actor?.avatar}
            alt={actor?.name}
            className="w-full h-full  object-cover rounded-2xl border border-primary hover:border-[0px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[-4px_4px_16px_#00FFFF,_4px_-4px_16px_#00FF00]"
            onClick={() => navigate(`/famousperson/${actor?.person_id}`)}
          />
          <label
            className="block mt-2 cursor-pointer"
            onClick={() => navigate(`/famousperson/${actor?.person_id}`)}
          >
            {actor?.name}
          </label>
        </div>
      );
    });
  };

  console.log(movie);

  return (
    <div className=" min-h-screen grid grid-cols-[550px,1fr] backdrop-blur-md text-white mt-[70px] ">
      <div className=" w-[500px] h-full overflow-hidden">
        <img
          src={movie[0]?.poster}
          alt=""
          className="w-[500px] h-[700px] overflow-hidden  transition-all ease-in-out delay-750 hover:scale-125 hover:rotate-3"
        />
        <div className="mt-10">
          <button
            className="h-16 text-3xl bg-blue-600 rounded-lg w-[200px] mr-24 hover:bg-primary"
            onClick={() =>
              navigate(
                `/watch/${movie[0]?.movie_id}/${movie[0]?.episode[0]?.episode_movie}`
              )
            }
          >
            XEM PHIM
          </button>
          <button className="h-16 text-3xl bg-blue-600 rounded-lg w-[200px] hover:bg-primary">
            THÍCH PHIM
          </button>
        </div>
      </div>
      <div className="pt-3 pl-3 info">
        <div className="my-5 py-2 text-6xl font-bold bg-[linear-gradient(45deg,#00FFFF,#00FF00)] bg-clip-text text-transparent">
          {movie[0]?.title}
        </div>
        <div className="my-5 text-xl font-bold bg-[linear-gradient(45deg,#00FFFF,#00FF00)] bg-clip-text text-transparent">
          {movie[0]?.titleenglish}
        </div>
        <div className="my-8 mr-8">
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Năm phát hành
            </label>
            <span className="text-2xl">{movie[0]?.releasemovie}</span>
          </div>
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Thời lượng phim
            </label>
            <span className="text-2xl">
              {movie[0]?.episode[0]?.duration} phút
            </span>
          </div>
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Đánh giá
            </label>
            <span className="text-2xl">{movie[0]?.rating}</span>
            <i className="ml-1 text-yellow-500 fa-solid fa-star"></i>
          </div>
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Lượt xem
            </label>
            <span className="text-2xl">{movie[0]?.view_number}</span>
          </div>
          <div className="inline-block mr-16">
            <label htmlFor="" className="block mb-2 text-sm text-white">
              Thể loại
            </label>
            {showListGenre()}
          </div>
        </div>
        <div className="my-8 mr-8 movie-description">
          {movie[0]?.description}
        </div>
        <div className="my-8 mr-8 movie-cast">
          <h3 className="text-3xl font-medium text-blue-500">DIỄN VIÊN</h3>
          <div className="grid grid-cols-8 gap-5">{showListDirector()}</div>
        </div>
        <div className="my-8 mr-8 movie-cast">
          <h3 className="mt-16 text-3xl font-medium text-blue-500">ĐẠO DIỄN</h3>
          <div className="grid grid-cols-8 gap-5 mb-5">{showListActor()}</div>
          {trailerMovie()}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
