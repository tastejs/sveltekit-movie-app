const api = "61e588d14c9ac42a437e560cc3d65659";
const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api}&language-en-GB`;
const get = async () => {
  try {
    const response = await fetch(GENRES_TV_API);
    const response_json = await response.json();
    const tv_genres = response_json.genres;
    return {
      body: JSON.stringify({ tv_genres })
    };
  } catch (e) {
    console.log("error", e);
  }
};
export { get };
