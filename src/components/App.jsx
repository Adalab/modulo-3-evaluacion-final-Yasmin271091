import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';


import getDataFromApi from '../services/api';
import ls from '../services/localStorage';
import '../styles/App.scss';
import Header from './Header';
import Filters from './Filters';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';

const App = () => {
  const [movieData, setMovieData] = useState(ls.get('movies') || []);
  const [titleFilter, setTitleFilter] = useState(ls.get('titleFilter') || '');
  const [yearFilter, setYearFilter] = useState(ls.get('yearFilter') || 'all');

  useEffect(() => {
    if (movieData.length === 0) {
      getDataFromApi().then((cleanData) => {
        setMovieData(cleanData);
        ls.set('movies', cleanData);
      });
    }
  }, []);

  const handleFilterChange = (ev) => {
    const value = ev.target.value;
    setTitleFilter(value);
    ls.set('titleFilter', value);
  };

  const handleYearChange = (ev) => {
    const value = ev.target.value;
    setYearFilter(value);
    ls.set('yearFilter', value);
  };

  const filteredScenes = movieData.filter((scene) => {
    const yearMatch =
      yearFilter === 'all' || scene.year.toString() === yearFilter;
    const titleMatch = scene.movie
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    return yearMatch && titleMatch;
  });

  const getUniqueYears = () => {
    const years = movieData.map((item) => item.year);
    return [...new Set(years)];
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/movie/:id', pathname);

  const movieId = routeData !== null ? routeData.params.id : null;
  const clickedMovie = movieData.find((item) => item.id === parseInt(movieId));

  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Filters
                  handleFilterChange={handleFilterChange}
                  handleYearChange={handleYearChange}
                  searchText={titleFilter}
                  selectedYear={yearFilter}
                  years={getUniqueYears()}
                />
                 {filteredScenes.length > 0 ? (
                  <MovieSceneList scenes={filteredScenes} />
                ) : (
                  <div>No hay ninguna nombre de película que coincida con la palabra {titleFilter}</div>
                )}
              </>
            }
          />

          <Route
            path='/movie/:id'
            element={
                  <MovieSceneDetail clickedMovie={clickedMovie} />
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
