import React from 'react';

const MovieSceneItem = ({ scene }) => {
  return (
    <div className='scene-card'>
      <img src={scene.poster} 
      alt={scene.movie}
      width="150px"
      />

      <div className='scene-details'>
        <h3>{scene.movie}</h3>
        <p>{scene.full_line}</p>
        <p>Año: {scene.year}</p>
      </div>
    </div>
  );
};

export default MovieSceneItem;
