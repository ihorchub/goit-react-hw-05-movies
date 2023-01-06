import styled from 'styled-components';

export const ReviewsTitle = styled.h2`
  color: #9e1501;
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ReviewsItem = styled.li`
  padding: 12px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  :nth-child(2n + 1) {
    background-color: #eee;
  }
`;

export const AuthorTitle = styled.h3`
  color: #9e1501;
  font-size: 16px;
`;

export const TextUpdate = styled.p`
  margin-top: 8px;
  font-weight: 500;
`;

export const Text = styled.p`
  margin-top: 8px;
`;
