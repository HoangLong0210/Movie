import React from "react";
import { useNavigate } from "react-router-dom";

const SeriesCard = (item) => {
  const props = item.props;

  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 mr-[-25px] text-white rounded-lg select-none bg-slate-800 ">
      <img
        src={props?.poster}
        alt=""
        className="w-full h-[400px]  rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="flex justify-center mb-3 text-xl font-bold">
          {props?.title}
        </h3>
        <h3 className="flex justify-center mb-5 text-lg italic font-bold text-blue-400 ">
          {props?.titleenglish}
        </h3>
        <h3 className="flex justify-center mb-5 text-lg italic font-bold text-blue-400 ">
          Tập {props?.episode_movie}
        </h3>
        <div className="flex items-center justify-between mb-5 text-sm opacity-50">
          <span>{props?.releasemovie}</span>
          <span>{props?.rating}</span>
          <span>{props?.view_number}</span>
        </div>
        <button
          onClick={() =>
            navigate(`/watch/${props?.movie_id}/${props.episode_movie}`)
          }
          className="w-full px-6 py-3 mt-auto text-xl capitalize rounded-lg bg-primary"
        >
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default SeriesCard;
