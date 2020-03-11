import { useState, useEffect } from "react";
import { POPULAR_MOVIE_BASE_URL, POPULAR_TVSHOW_BASE_URL } from "../../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      setState(prevState => ({
        ...prevState,
        movies:
          isLoadMore !== -1
            ? [...prevState.movies, ...result.results]
            : [...result.results],
        heroImage: prevState.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(POPULAR_MOVIE_BASE_URL);
  }, []);

  return [{ state, loading, error }, fetchMovies];
};

export const useTvHomeFetch = () => {
  const [state, setState] = useState({ tvShows: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(state);

  const fetchTvShows = async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      setState(prevState => ({
        ...prevState,
        tvShows:
          isLoadMore !== -1
            ? [...prevState.tvShows, ...result.results]
            : [...result.results],
        heroImage: prevState.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTvShows(POPULAR_TVSHOW_BASE_URL);
  }, []);

  return [{ state, loading, error }, fetchTvShows];
};

