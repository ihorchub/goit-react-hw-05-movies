import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from 'GlobalStyles';
import { Header, Nav, StyledLink, Wraper } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Wraper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Wraper>
      <GlobalStyle />
    </>
  );
};

export default SharedLayout;
