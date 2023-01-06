import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ThemoviedbAPI from 'Api/ThemoviedbAPI';

const fetchDetails = new ThemoviedbAPI();

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetchDetails.fetchById(movieId);
        const movieInfo = response.data;
        setPoster(`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`);
        setTitle(movieInfo.title);
        setOverview(movieInfo.overview);
        setGenres(movieInfo.genres);
        setScore(movieInfo.vote_average);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [movieId]);

  const getGenres = () => genres.map(item => item.name).join(', ');

  const backLinkHref = location.state?.from ?? '/';

  return (
    <article>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <img src={poster} alt={`poster by ${title} movie`} />
        <div>
          <h2>{title}</h2>
          <p>User Score: {Number.parseInt(score * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{getGenres()}</p>
        </div>
      </div>

      <div>
        <h5>Additional information</h5>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </article>
  );
};

export default MovieDetails;
