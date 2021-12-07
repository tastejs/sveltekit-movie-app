const api = "61e588d14c9ac42a437e560cc3d65659";
const TV_NETWORKS_API = `https://api.themoviedb.org/3/watch/providers/tv?api_key=${api}&language=en-US`;
const get = async () => {
  try {
    const response = await fetch(TV_NETWORKS_API);
    const response_json = await response.json();
    const tv_network = response_json.results;
    return {
      body: JSON.stringify({ tv_network })
    };
  } catch (e) {
    console.log("error", e);
  }
};
export { get };
