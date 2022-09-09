import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          NOW PLAYING
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          TOP TRENDING
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          TOP RATED
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          TOP VIEWS
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          COMING SOON
        </h2>
        <MovieList></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
