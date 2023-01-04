import { Routes, Route, NavLink } from 'react-router-dom';

// import SharedLayout from 'components/SharedLayout/SharedLayout ';
import Home from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="*" element={<Home />} />
//       </Route>
//     </Routes>
//   );
// };
