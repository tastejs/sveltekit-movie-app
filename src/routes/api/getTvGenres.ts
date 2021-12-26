const api = import.meta.env.VITE_API_KEY
const api_url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api}&language-en-GB`;

export async function get(): Promise<{ body: string }> {
	try {
		const response = await (await fetch(api_url)).json()
		const tv_genres = response.genres
		return {
			body: JSON.stringify({ tv_genres })
		}
	}
	catch (e) {
		console.log('error', e)
	}
}