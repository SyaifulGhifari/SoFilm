import useFetchDetailMovie from '../../hooks/useFetchDetailMovie';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
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

  // let genre = movie.genres.map((genre) => genre.name);

  // console.log(genre);

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
              <span className=''>{duration}</span>
              <div className='mt-3'> {movie.overview} </div>
              <button className='bg-red-300 md:absolute bottom-0 left-5'>
                Home
              </button>
              <button className='bg-red-300 md:absolute ml-3 bottom-0 left-20'>
                Add Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
