import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieSceneDetail.scss';

const MovieSceneDetail = ({ clickedMovie }) => {
  return (
    <div className='clickedMovie-detail'>
      <img className='clickedMovie-detail__image'
      src={clickedMovie.poster} alt={clickedMovie.movie}  />
      <h2 className='clickedMovie-detail__title'>{clickedMovie.movie}</h2>
      <p className='clickedMovie-detail__director'>Director: {clickedMovie.director}</p>
      <p className='clickedMovie-detail__fullLine'>Frase completa: {clickedMovie.fullLine}</p>
      <a
        href={clickedMovie.audio}
        target='_blank'
        rel='noopener noreferrer'
        className='clickedMovie-detail__audioLink'
      >
        Escuchar audio
      </a>
      <Link className='clickedMovie-detail__back' to='/'>
        <i className='fa-solid fa-arrow-left-long'></i> Volver
      </Link>
    </div>
  );
};

export default MovieSceneDetail;






