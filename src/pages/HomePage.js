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
          TOP SEARCH
        </h2>
        <MovieList type="top-search"></MovieList>
      </section>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          TOP RATED
        </h2>
        <MovieList type="top-rating"></MovieList>
      </section>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          TOP FAVOURITES
        </h2>
        <MovieList type="top-follows"></MovieList>
      </section>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          TOP VIEWS
        </h2>
        <MovieList type="top-view"></MovieList>
      </section>
      <section className="mb-20 page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          COMING SOON
        </h2>
        <MovieList type="coming-soon"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
