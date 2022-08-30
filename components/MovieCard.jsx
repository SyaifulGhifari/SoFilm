import { useRouter } from 'next/router';
export default function MoviveCard({ title, image, navigate }) {
  const router = useRouter();
  const handleClickCard = (e) => {
    router.push(navigate);
  };

  return (
    <div className='mx-auto'>
      <div className='border group relative text-white mx-4 my-8 lg:my-6 lg:mx-5'>
        <img
          onClick={handleClickCard}
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt='film'
          className='group-hover:blur-sm'
        />
        <div className='invisible transition duration-500 group-hover:ease-in transform hover:-translate-y-3 :scale-110 font-semibold absolute top-1/2 text-center w-full group-hover:block'>
          {title}{' '}
        </div>
      </div>
    </div>
  );
}
