import React from 'react';

const MovieSceneDetail = ({ scene }) => {
  return (
    <div className="scene-detail">
      <h2>{scene.movie}</h2>
      <p>Director: {scene.director}</p>
      <p>Frase completa: {scene.full_line}</p>
      <a href={scene.audio_link} target="_blank" rel="noopener noreferrer">Enlace de audio</a>
    </div>
  );
}

export default MovieSceneDetail;
