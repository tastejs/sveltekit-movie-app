const api = import.meta.env.VITE_API_KEY
const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language-en-GB`;

export const get = async () => {
	try {
		const response: Response = await fetch(GENRES_MOVIE_API);
		const response_json: Media = await response.json();
		const movie_genres: Genre[] = response_json.genres;
		return {
			body: JSON.stringify({ movie_genres })
		}
	}
	catch (e) {
		console.log('error', e)
	}
}