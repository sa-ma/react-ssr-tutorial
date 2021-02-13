import { useRouter } from 'next/router';
import movies from '../../data';

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  const getMovieById = movies.find((item) => item.slug === id);

  if (!getMovieById) {
    return <h1>Movie does not exist.</h1>;
  }

  return (
    <div>
      <h1>{getMovieById.title}</h1>
      <p>{getMovieById.description}</p>
    </div>
  );
};

export default Movie;
