import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useTvShowFetch = tvId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}tv/${tvId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}tv/${tvId}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();
      const directors = creditsResult.crew.filter(
          member => member.job === 'Director'
      );

      setState({
          ...result,
          actors: creditsResult.cast,
          directors
      })

    } catch {
      setError(true);
    }
    setLoading(false);
  }, [tvId])

  useEffect(() => {
    if (localStorage[tvId]) {
      console.log("data from localStorage");
      setState(JSON.parse(localStorage[tvId]))
      setLoading(false);
    } else {
      console.log("data from the API");
      fetchData();
    }
      
  }, [fetchData, tvId])

  useEffect(() => {
    localStorage.setItem(tvId, JSON.stringify(state));
  }, [tvId, state])

  return [state, loading, error];
};
