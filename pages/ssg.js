import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import MoviveCard from '../components/MovieCard';
import useFetchMovies from '../hooks/useFetchMovies';
import { data } from 'autoprefixer';

export default function Home({ movies }) {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        className='text-blue-300 font-bold'
        style={{ textDecoration: 'underline' }}
      >
        LIST MOVIES TERBARU
      </div>

      {movies?.map((movie) => {
        return (
          <MoviveCard
            key={movie.id}
            title={movie.title}
            description={movie.overview}
          />
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/3/movie/now_playing?api_key=961c2ec87f82d7d386c0c051160f915e&language=en-US&page=1`
    );
    const data = await res.json();
    return {
      props: {
        movies: data.results,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
