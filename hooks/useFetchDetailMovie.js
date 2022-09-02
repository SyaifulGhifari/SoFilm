import { useState, useEffect } from 'react';

export default function useFetchDetailMovie(id) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND}/3/movie/${id}?api_key=961c2ec87f82d7d386c0c051160f915e&language=en-US`
          );
          const data = await res.json();
          setMovie(data);
        } catch (error) {}
      };
      fetchData();
    }
  }, [id]);

  return { movie };
}
