import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ThemoviedbAPI from 'Api/ThemoviedbAPI';

const fetchTrending = new ThemoviedbAPI();

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const response = await fetchTrending.fetchTrending();
        setTrends(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {trends.length > 0 && (
        <ul>
          {trends.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: '/' }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
