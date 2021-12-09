<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
		media_type.set('movie');
		const res = await fetch('../api/getMovie', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				id: page.params.id
			})
		});
		const datas = await res.json();
		const movie_details = await datas.res;

		const trailer = await fetch('../api/getTrailer', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				id: page.params.id
			})
		});
		const trailer_details = await trailer.json();
		const trailer_id: number = (await trailer_details.res.results.length)
			? trailer_details.res.results[0].key
			: 999;

		const resp = await fetch('../../api/getCast', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				id: page.params.id
			})
		});
		const casts = await resp.json();
		const cast = await casts.res.cast;
		return {
			props: {
				movie_details,
				trailer_id,
				cast
			}
		};
	}
</script>

<script lang="ts">
	import MovieMedia from '$lib/pages/MovieMedia.svelte';
	export let movie_details: MovieType;
	export let trailer_id: number;
	export let cast;
</script>

<MovieMedia {movie_details} {trailer_id} {cast} />
