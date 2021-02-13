import Link from 'next/link';
import movies from '../data';

export async function getServerSideProps() {
  return {
    props: {
      allMovies: movies,
    },
  };
}

export default function Home({ allMovies }) {
  return (
    <div>
      <main>
        <h1>Welcome to a Movie List.</h1>
        <ul>
          {allMovies.map((item) => (
            <li key={item.slug}>
              <Link href={`/movies/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
