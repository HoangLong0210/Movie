import React from "react";
import { useNavigate } from "react-router-dom";

const BannerItem = (item) => {
  const props = item.props;

  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full rounded-lg mt-10">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.25)] rounded-lg"></div>
      <img src={props?.poster} alt="" className="w-full h-full rounded-lg " />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-3 text-3xl font-bold">{props?.title}</h2>
        <h3 className="mb-10 text-xl italic font-bold text-blue-600">
          {props?.titleenglish}
        </h3>

        <div className="mb-8">
          {/* <button className="px-6 py-3 mr-10 text-2xl font-medium rounded-lg bg-primary">
            PLAY NOW
          </button> */}
          <button
            onClick={() => navigate(`movie/${props?.movie_id}`)}
            className="px-6 py-3 text-2xl font-medium rounded-lg bg-primary"
          >
            INFORMATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
