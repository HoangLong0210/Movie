import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
import Comment from "../components/comment/Comment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "../components/movie/MovieCard";

const MovieWatchPage = () => {
  const [episode, setEpisode] = useState([]);
  const { movieId, episodeMovie } = useParams();
  //console.log(episode);

  async function handeleData() {
    const response = await axios.get(
      `http://localhost:8888/episode/detail/${movieId}/${episodeMovie}`
    );
    //console.log(response);
    setEpisode(response.data.data);
  }

  useEffect(() => {
    handeleData();
  }, []);

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
      </div>

      <Comment></Comment>
      {/* <div className="mt-10">
        <span className="mb-10">Bình luận</span>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div> */}
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieSimilar() {
  return (
    <div className="py-10">
      <h2 className="mb-10 text-4xl font-bold text-center text-blue-400">
        SIMILAR MOVIES
      </h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {Array(20)
            .fill()
            .map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieWatchPage;
