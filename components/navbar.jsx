import { RiMovie2Line } from 'react-icons/ri';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const handleClickLogo = () => {
    router.push('/');
  };

  const darkMode = (e) => {};

  const handleClickMyFavorite = () => {
    router.push('/myFavorite');
  };
  return (
    <div className='sticky px-10 md:px-20 flex justify-between z-30 h-20 backdrop-blur-sm bg-ijo shadow-sm items-center top-0'>
      <div
        className='flex text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 cursor-pointer'
        onClick={handleClickLogo}
      >
        <RiMovie2Line className='mr-2' />
        <span className='text-slate-200'>So</span>
        <span>Film</span>
      </div>
      <div
        className='flex text-4xl font-semibold text-slate-900 cursor-pointer'
        onClick={darkMode}
      >
        <RiMovie2Line className='text-4xl' />
        <span className='text-slate-200'>So</span>
        <span>Film</span>
      </div>
      <div
        className='flex text-4xl font-semibold text-slate-900 cursor-pointer'
        onClick={handleClickMyFavorite}
      >
        <span>My</span>
        <span>Favorite</span>
      </div>
    </div>
  );
}
