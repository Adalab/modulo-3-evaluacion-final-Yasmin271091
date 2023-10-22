import React from 'react';
import { Link } from 'react-router-dom';

const MovieSceneDetail = ({ clickedMovie }) => {

  return (
    <div className='clickedMovie-detail'>
      <img src={clickedMovie.poster}alt={clickedMovie.movie} />
      <h2>{clickedMovie.movie}</h2>
      <p>Director: {clickedMovie.director}</p>
      <p>Frase completa: {clickedMovie.fullLine}</p>
      <a href={clickedMovie.audio} target='_blank' rel='noopener noreferrer'>
        Enlace de audio
      </a>
      <Link className='detail__back' to='/'>
        <i className='fa-solid fa-arrow-left-long'></i> Volver
      </Link>
    </div>
  );
};

export default MovieSceneDetail;





