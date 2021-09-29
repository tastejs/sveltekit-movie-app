<script context="module" lang="ts">
	import { get } from 'svelte/store';
	import { media_type, ApiKey } from '$lib/stores/store';

	export async function load({ page }) {
		let movie_api_url = `https://api.themoviedb.org/3/movie/${page.params.id}?api_key=${get(
			ApiKey
		)}&language=en-US`;
		let trailer_api_url = `https://api.themoviedb.org/3/movie/${
			page.params.id
		}/videos?api_key=${get(ApiKey)}&language=en-US`;
		let movie_details: MovieType = await fetch(movie_api_url).then((x) => x.json());
		let trailer = await fetch(trailer_api_url).then((x) => x.json());
		let trailer_id: number = trailer.results.length ? trailer.results[0].key : 999;
		return {
			props: {
				movie_details,
				trailer_id
			}
		};
	}
</script>

<script lang="ts">
	import MovieMedia from '$lib/pages/MovieMedia.svelte';
	import { page } from '$app/stores';
	import Spinner from '$lib/utilities/Spinner.svelte';
	export let movie_details: MovieType;
	export let trailer_id: number;

	$media_type = 'movie';
	let movie_id: string = $page.params.id;
</script>

{#if movie_details && trailer_id}
	<MovieMedia {movie_details} {trailer_id} {movie_id} />
{:else}
	<Spinner />
{/if}
