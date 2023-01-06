import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { helpers } from 'ApiHelpers/helpers';
import axios from 'axios';
import {
  Addition,
  AdditionItem,
  AdditionTitle,
  AdditionLink,
  BackLink,
  FilmInfo,
  MovieDescription,
  Picture,
  Title,
} from './MovieDetails.styled';

const { baseUrl, key, append } = helpers;
axios.defaults.baseURL = baseUrl;

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getMovie() {
      try {
        const response = await axios.get(
          `/movie/${movieId}?api_key=${key}&append_to_response=${append}`,
          {
            signal: controller.signal,
          }
        );
        const movieInfo = response.data;

        setPoster(`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`);
        setTitle(movieInfo.title);
        setOverview(movieInfo.overview);
        setGenres(movieInfo.genres);
        setScore(movieInfo.vote_average);
        setCast(movieInfo.credits.cast);
        setReviews(movieInfo.reviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  const getGenres = () => genres.map(item => item.name).join(', ');

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <FilmInfo>
        <Picture src={poster} alt={`poster by ${title} movie`} />
        <div>
          <Title>{title}</Title>
          <p>User Score: {Number.parseInt(score * 10)}%</p>
          <MovieDescription>Overview</MovieDescription>
          <p>{overview}</p>
          <MovieDescription>Genres</MovieDescription>
          <p>{getGenres()}</p>
        </div>
      </FilmInfo>

      <Addition>
        <AdditionTitle>Additional information</AdditionTitle>
        <ul>
          <AdditionItem>
            <AdditionLink
              to="cast"
              state={{
                from: backLinkHref,
                cast,
              }}
            >
              Cast
            </AdditionLink>
          </AdditionItem>
          <AdditionItem>
            <AdditionLink
              to="reviews"
              state={{
                from: backLinkHref,
                reviews,
              }}
            >
              Reviews
            </AdditionLink>
          </AdditionItem>
        </ul>
      </Addition>
      <Outlet />
    </>
  );
};

export default MovieDetails;
