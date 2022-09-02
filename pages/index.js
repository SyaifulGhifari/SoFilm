import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import MoviveCard from '../components/MovieCard';
import useFetchMovies from '../hooks/useFetchMovies';
import Navbar from '../components/navbar';

export default function Home() {
  const [page, setPage] = useState(1);
  const { movies, isError, isLoading: isLoadingMovies } = useFetchMovies(page);

  const handleScroll = (e) => {
    let element = e.target;
    const bottom =
      Math.round(element.scrollHeight - element.scrollTop) ===
      element.clientHeight;
    if (bottom) {
      setPage((state) => state + 1);
    }
  };

  if (isLoadingMovies) {
    return 'LOADING';
  }

  return (
    <div
      className='bg-slate-100'
      style={{
        height: '100vh',
        width: '100%',
        overflow: 'auto',
      }}
      onScroll={handleScroll}
    >
      <Navbar />

      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid px-10 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {movies.map((movie) => {
          return (
            <MoviveCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              image={movie.poster_path}
              navigate={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}
