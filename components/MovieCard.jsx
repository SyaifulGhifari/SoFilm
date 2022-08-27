export default function MoviveCard({ title, image }) {
  return (
    <div className='border'>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} alt='film' />
      Title: {title}
    </div>
  );
}
