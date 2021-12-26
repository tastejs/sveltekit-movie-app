const api = import.meta.env.VITE_API_KEY
const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api}&language-en-GB`;

export const get = async () => {
	try {
		const response: Response = await fetch(GENRES_TV_API);
		const response_json: Media = await response.json();
		const tv_genres = response_json.genres
		return {
			body: JSON.stringify({ tv_genres })
		}
	}
	catch (e) {
		console.log('error', e)
	}
}