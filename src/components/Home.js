import React, { useState, useEffect } from "react";
import {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE
} from "../config";

// import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

// Custom Hook

import { useHomeFetch } from "./hooks/useHomeFetch";

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();

  console.log(state);

  if (error) {
    return <div>Something went wrong...</div>;
  }
  
  if (!state.movies[0]) return <Spinner />;

  return (
    <React.Fragment>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </React.Fragment>
  );
};

export default Home;
