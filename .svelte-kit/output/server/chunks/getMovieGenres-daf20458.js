const api = "61e588d14c9ac42a437e560cc3d65659";
const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language-en-GB`;
const get = async () => {
  try {
    const response = await fetch(GENRES_MOVIE_API);
    const response_json = await response.json();
    const movie_genres = response_json.genres;
    return {
      body: JSON.stringify({ movie_genres })
    };
  } catch (e) {
    console.log("error", e);
  }
};
export { get };
