import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { helpers } from 'ApiHelpers/helpers';
import axios from 'axios';
import { Button, FilmItem, Title, FilmLink } from './Movies.styled';

const { baseUrl, key } = helpers;
axios.defaults.baseURL = baseUrl;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;

    const controller = new AbortController();

    async function getMovies() {
      try {
        const response = await axios.get(
          `/search/movie?api_key=${key}&query=${query}`,
          {
            signal: controller.signal,
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();

    return () => {
      controller.abort();
    };
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
        <Button type="submit">Search</Button>
      </form>
      {movies.length > 0 && (
        <div>
          <Title>{`Result on request "${query}"`}</Title>
          <ul>
            {movies.map(({ id, original_title }) => (
              <FilmItem key={id}>
                <FilmLink to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </FilmLink>
              </FilmItem>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Movies;
