import React, { useState } from "react";
import {
  POPULAR_MOVIE_BASE_URL,
  SEARCH_MOVIE_BASE_URL,
  SEARCH_TVSHOW_BASE_URL,
  POPULAR_TVSHOW_BASE_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE
} from "../config";

// import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import TvShowThumb from "./elements/TvShowThumb";

import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import NoImage from "./images/no_image.jpg";

// Custom Hook
import { useHomeFetch, useTvHomeFetch } from "./hooks/useHomeFetch";


const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies    
  ] = useHomeFetch();
  
  // const [
  //   {
  //     state: { tvShows, currentPage, totalPages, heroImage },
  //     loading,
  //     error
  //   },    
  //   fetchTvShows
  // ] = useTvHomeFetch();

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = search => {
    const endpoint = search ? SEARCH_MOVIE_BASE_URL + search : POPULAR_MOVIE_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_MOVIE_BASE_URL}${searchTerm}&page=${currentPage +
      1}`;
    const popularEndpoint = `${POPULAR_MOVIE_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  // const searchTvShows = search => {
  //   const endpoint = search ? SEARCH_TVSHOW_BASE_URL + search : POPULAR_TVSHOW_BASE_URL;

  //   setSearchTerm(search);
  //   fetchTvShows(endpoint);
  // };

  // const loadMoreTvShows = () => {
  //   const searchEndpoint = `${SEARCH_TVSHOW_BASE_URL}${searchTerm}&page=${currentPage +
  //     1}`;
  //   const popularEndpoint = `${POPULAR_TVSHOW_BASE_URL}&page=${currentPage + 1}`;

  //   const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

  //   fetchTvShows(endpoint);
  // };

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (!movies[0]) return <Spinner />;
  // if (!tvShows[0]) return <Spinner />;

  return (
    <React.Fragment>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {/* <Grid header={searchTerm ? "Search Result" : "Popular Tv Shows"}>
        {tvShows.map(tvShow => (
          <TvShowThumb
            key={tvShow.id}
            clickable
            image={
              tvShow.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tvShow.poster_path}`
                : NoImage
            }
            tvId={tvShow.id}
            tvShowName={tvShow.original_title}
          />
        ))}
      </Grid> */}
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </React.Fragment>
  );
};

export default Home;
