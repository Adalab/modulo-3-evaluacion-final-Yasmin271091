import React from 'react';
import { Link } from 'react-router-dom';

const MovieSceneItem = ({ scene }) => {
  return (
    <Link to={`/movie/${scene.id}`} className='scene-card'>
      <img src={scene.poster} alt={scene.movie} width='150px' />

      <div className='scene-details'>
        <h3>{scene.movie}</h3>
        <p>{scene.fullLine}</p>
        <p>Año: {scene.year}</p>
      </div>
    </Link>
  );
};

export default MovieSceneItem;

