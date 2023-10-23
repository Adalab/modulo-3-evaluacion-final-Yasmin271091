import React from 'react';
import '../styles/MovieSceneItem.scss';
import { Link } from 'react-router-dom';

const MovieSceneItem = ({ scene }) => {
  return (
    <Link to={`/movie/${scene.id}`} className='scene-card'>
      <img
        className='scene-card__image'
        src={scene.poster}
        alt={scene.movie}
        title={scene.movie}
      />
      <h3 className='scene-card__title'>{scene.movie}</h3>
      <p className='scene-card__line'>{scene.fullLine}</p>
      <p className='scene-card__year'>Año: {scene.year}</p>
    </Link>
  );
};

export default MovieSceneItem;
