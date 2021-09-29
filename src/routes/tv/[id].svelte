<script context="module" lang="ts">
	import { get } from 'svelte/store';
	import { media_type, ApiKey } from '$lib/stores/store';

	export async function load({ page }) {
		let tv_api_url = `https://api.themoviedb.org/3/tv/${page.params.id}?api_key=${get(
			ApiKey
		)}&language=en-US`;
		let trailer_api_url = `https://api.themoviedb.org/3/tv/${page.params.id}/videos?api_key=${get(
			ApiKey
		)}&language=en-US`;
		let tv_details: TvType = await fetch(tv_api_url).then((x) => x.json());
		let trailer = await fetch(trailer_api_url).then((x) => x.json());
		let trailer_id: number = trailer.results.length ? trailer.results[0].key : 999;
		return {
			props: {
				tv_details,
				trailer_id
			}
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import TvMedia from '$lib/pages/TvMedia.svelte';
	import Spinner from '$lib/utilities/Spinner.svelte';
	export let tv_details: TvType;
	export let trailer_id: number;

	$media_type = 'tv';
	let movie_id = $page.params.id;
</script>

{#if tv_details && trailer_id}
	<TvMedia {tv_details} {trailer_id} {movie_id} />
{:else}
	<Spinner />
{/if}
