const api = import.meta.env.VITE_API_KEY
const api_url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language-en-GB`;

export async function get(): Promise<{ body: string }> {
	try {
		const response = await (await fetch(api_url)).json()
		const movie_genres: Genre[] = response.genres
		return {
			body: JSON.stringify({ movie_genres })
		}
	}
	catch (e) {
		console.log('error', e)
	}
}