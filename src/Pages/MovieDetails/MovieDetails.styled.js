import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: block;
  color: black;
  padding: 4px;
  margin-bottom: 20px;
  font-weight: 500;

  :hover {
    color: #9e1501;
    background-color: #ddd;
  }
`;

export const FilmInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Picture = styled.img`
  max-width: 200px;
  height: auto;
  margin-right: 16px;
`;

export const Title = styled.h2`
  color: #9e1501;
  font-size: 24px;
  margin-bottom: 16px;
`;

export const MovieDescription = styled.h3`
  color: #9e1501;
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const Addition = styled.div`
  background-color: #ccc;
  padding: 12px;
`;

export const AdditionTitle = styled.h3`
  color: #9e1501;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const AdditionItem = styled.li`
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const AdditionLink = styled(NavLink)`
  display: block;
  color: black;
  padding: 4px;

  :hover {
    color: #9e1501;
    background-color: #eee;
  }

  &.active {
    color: #9e1501;
    font-weight: 500;
  }
`;
