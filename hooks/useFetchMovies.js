import { useState, useEffect } from 'react';

export default function useFetchMovies(page) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND}/3/movie/now_playing?api_key=961c2ec87f82d7d386c0c051160f915e&language=en-US&page=${page}`
        );
        const data = await res.json();
        setMovies((state) => [...state, ...data?.results]);
        console.log(data.results);
      } catch (error) {
        setIsError(true);
      }
    };
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, [page]);

  return { movies, isLoading, isError };
}
