import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  color: #9e1501;
  font-size: 28px;
  margin-bottom: 16px;
`;

export const FilmItem = styled.li`
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const FilmLink = styled(Link)`
  display: block;
  color: black;
  padding: 4px;

  :hover {
    color: #9e1501;
    background-color: #eee;
  }
`;
