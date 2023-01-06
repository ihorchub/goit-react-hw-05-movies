import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { helpers } from 'ApiHelpers/helpers';
import axios from 'axios';
import { FilmItem, FilmLink, Title } from './Home.styled';

const { baseUrl, key } = helpers;
axios.defaults.baseURL = baseUrl;

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    async function getTrends() {
      try {
        const response = await axios.get(`/trending/movie/day?api_key=${key}`, {
          signal: controller.signal,
        });
        setTrends(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {trends.length > 0 && (
        <ul>
          {trends.map(({ id, original_title }) => (
            <FilmItem key={id}>
              <FilmLink to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </FilmLink>
            </FilmItem>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
