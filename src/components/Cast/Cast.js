import { useLocation } from 'react-router-dom';
import noPhoto from 'img/noPhoto.jpg';
import { CastItem, CastTitle, Picture } from './Cast.styled';

const Cast = () => {
  const location = useLocation();
  const cast = location.state.cast;

  return (
    <>
      {cast.length > 0 && (
        <div>
          <CastTitle>The cast of the film</CastTitle>
          <ul>
            {cast.map(({ id, character, name, profile_path }) => (
              <CastItem key={id}>
                <Picture
                  src={
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : noPhoto
                  }
                  alt={name}
                />
                <div>
                  <h3>Character: {character}</h3>
                  <p>Actor's name: {name}</p>
                </div>
              </CastItem>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
