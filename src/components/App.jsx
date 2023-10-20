// Fichero src/component/App.js
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import ls from '../services/localStorage';
import '../styles/App.scss';

const App = () => {
  const [movieData, setMovieData] = useState(ls.get('movies', []));

  useEffect(() => {
    if (movieData.length === 0) {
      getDataFromApi().then((cleanData) => {
        setMovieData(cleanData);
      });
    }
  }, []);
};

//return <></>;

export default App;
