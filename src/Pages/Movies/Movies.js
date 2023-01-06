import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import themoviedbAPI from 'Api/ThemoviedbAPI';

const fetchMovies = new themoviedbAPI();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;

    async function getMovies() {
      try {
        const response = await fetchMovies.fetchBySearch(query);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const search = e.target.elements.query.value;

    if (search.trim() === '') {
      return;
    }

    setSearchParams({ query: search.trim() });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <div>
          <h1>{`Result on request "${query}"`}</h1>
          <ul>
            {movies.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Movies;
