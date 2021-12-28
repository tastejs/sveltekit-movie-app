<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
		media_type.set('movie');
		const res = await (
			await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'show_detail',
					media: 'movie',
					id: page.params.id
				})
			})
		).json();
		const movie_details = await res.res;

		const trailer = await (
			await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'trailer',
					media: 'movie',
					id: page.params.id
				})
			})
		).json();
		const trailer_details = trailer.res.results;

		const resp = await (
			await fetch('../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'cast',
					id: page.params.id,
					media: 'movie'
				})
			})
		).json();
		const cast = await resp.res.cast;
		return {
			props: {
				movie_details,
				trailer_details,
				cast
			}
		};
	}
</script>

<script lang="ts">
	import MovieMedia from '$lib/pages/MovieMedia.svelte';
	export let movie_details: MovieType;
	export let trailer_details: Trailer_type[];
	export let cast: CastType[];
</script>

<MovieMedia {movie_details} {trailer_details} {cast} />
