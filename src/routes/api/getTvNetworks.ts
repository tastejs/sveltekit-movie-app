const api = import.meta.env.VITE_API_KEY
const TV_NETWORKS_API = `https://api.themoviedb.org/3/watch/providers/tv?api_key=${api}&language=en-US`

export const get = async () => {
	try {
		const response: Response = await fetch(TV_NETWORKS_API);
		const response_json = await response.json();
		const tv_network = response_json.results
		return {
			body: JSON.stringify({ tv_network })
		}
	}
	catch (e) {
		console.log('error', e)
	}
}