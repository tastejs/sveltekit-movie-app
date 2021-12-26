const api = import.meta.env.VITE_API_KEY
const api_url = `https://api.themoviedb.org/3/watch/providers/tv?api_key=${api}&language=en-US`

export const get = async () => {
	try {
		const response = await (await fetch(api_url)).json()
		const tv_network = response.results
		return {
			body: JSON.stringify({ tv_network })
		}
	}
	catch (e) {
		console.log('error', e)
	}
}