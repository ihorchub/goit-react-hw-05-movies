import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #ccc;
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 28px;
  font-weight: 500;
`;

export const Wraper = styled.div`
  padding: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  :hover {
    color: #fff;
  }

  &.active {
    color: #9e1501;
  }
`;
