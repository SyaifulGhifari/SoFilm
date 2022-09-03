import useFetchDetailMovie from '../../hooks/useFetchDetailMovie';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import Link from 'next/link';
export default function DetailMovie() {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = useFetchDetailMovie(id);
  console.log(movie.genres);
  const timeConvert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}hr ${minutes}min`;
  };
  const duration = timeConvert(movie.runtime);

  let genre = movie?.genres?.map((genre) => genre.name);

  const handleClickFavorite = (e) => {
    alert('Add Favorite Film Success');
  };

  return (
    <>
      <div
        className='bg-slate-100'
        style={{
          height: '100vh',
          width: '100%',
          overflow: 'auto',
        }}
      >
        <Navbar />

        <div className='px-5 lg:px-40'>
          <div className='md:columns-2 md:flex mt-10 md:mt-20'>
            <div className=' flex-1'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='h-poster mx-auto object-cover'
              />
            </div>
            <div className='flex-1 relative mt-5 md:mt-0 md:ml-5'>
              <div className='font-semibold text-2xl md:text-5xl mb-5'>
                {movie.original_title}
              </div>
              <span className=''>
                {duration} | {genre !== '' ? genre?.join(' • ') : ''}
              </span>
              <div className='mt-3'> {movie.overview} </div>
              <div className='my-10'>
                <button className='px-3 py-1 ml-5 bg-ijo hover:bg-ijoactive text-center rounded-md md:absolute bottom-3 left-5'>
                  <Link href='/'>Home</Link>
                </button>
                <button
                  onClick={handleClickFavorite}
                  className='bg-ijo ml-5 hover:bg-ijoactive px-3 py-1 text-center md:absolute rounded-md bottom-3 left-40'
                >
                  Add Favorite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
