import React from 'react';
import '../styles/MovieSceneList.scss';
import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ scenes }) => {
  return (
    <div className='scene-list'>
      {scenes.map((scene) => (
        <MovieSceneItem key={scene.id} scene={scene} />
      ))}
    </div>
  );
};

export default MovieSceneList;
