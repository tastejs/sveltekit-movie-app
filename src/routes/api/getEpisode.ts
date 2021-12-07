const api = import.meta.env.VITE_API_KEY

export const post = async (request: { body: { [x: string]: string; }; }) => {
	try {
		const api_url = `https://api.themoviedb.org/3/tv/${request.body["id"]}/season/${request.body["season_number"]}/episode/${request.body["episode_number"]}?api_key=${api}&language=en-US`;
		const res_api = await fetch(api_url);
		const res = await res_api.json()
	return {
			body: JSON.stringify({ res })
		} 
	}
	catch (e) {
		console.log('error', e)
	}
}