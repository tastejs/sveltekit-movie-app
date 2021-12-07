const api = "61e588d14c9ac42a437e560cc3d65659";
const post = async (request) => {
  try {
    const api_url = `https://api.themoviedb.org/3/${request.body["media"]}/${request.body["id"]}?api_key=${api}&language=en-US`;
    const res_mov = await fetch(api_url);
    const res = await res_mov.json();
    return {
      body: JSON.stringify({ res })
    };
  } catch (e) {
    console.log("error", e);
  }
};
export { post };
