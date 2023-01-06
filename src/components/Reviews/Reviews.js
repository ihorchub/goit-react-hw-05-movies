import { useLocation } from 'react-router-dom';
import {
  AuthorTitle,
  ReviewsItem,
  ReviewsTitle,
  Text,
  TextUpdate,
} from './Reviews.styled';

const Reviews = () => {
  const location = useLocation();
  const reviews = location.state.reviews;

  return (
    <>
      {reviews.length > 0 && (
        <div>
          <ReviewsTitle>The reviews of the film</ReviewsTitle>
          <ul>
            {reviews.map(({ id, author, content, updated_at }) => (
              <ReviewsItem key={id}>
                <AuthorTitle>Author name: {author}</AuthorTitle>
                <TextUpdate>
                  Review update: {new Date(updated_at).toLocaleDateString()}
                </TextUpdate>
                <Text>{content}</Text>
              </ReviewsItem>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
