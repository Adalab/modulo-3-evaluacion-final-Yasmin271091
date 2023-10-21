const getDataFromAPI = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((data, index) => {
        return {
          id: index,
          movie: data.movie,
          year: data.year,
          director: data.director,
          fullLine: data.full_line,
          poster: data.poster,
          audio: data.audio,
        };
      });
      return cleanData;
    });
};

export default getDataFromAPI;

