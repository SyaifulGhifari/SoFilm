import { useRouter } from 'next/router';
export default function MoviveCard({ title, image, navigate }) {
  const router = useRouter();
  const handleClickCard = (e) => {
    router.push(`/detail/${navigate}`);
  };

  return (
    <div className='mx-auto'>
      <div className='border group relative text-white mx-4 my-8 lg:my-6 lg:mx-5'>
        <img
          onClick={handleClickCard}
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt='film'
          className='group-hover:blur-sm group-hover:brightness-90 cursor-pointer'
        />
        <div className='opacity-0 group-hover:opacity-100 duration-500 group-hover:top-1/2 group-hover:ease-in transform grou-hover:-translate-y-3 group-hover:scale-110 font-bold absolute top-80 text-center w-full'>
          {title}{' '}
        </div>
      </div>
    </div>
  );
}
