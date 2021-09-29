<script context="module" lang="ts">
	import { get } from 'svelte/store';
	import { ApiKey } from '$lib/stores/store';
	export async function load({ page }) {
		let api_url = `https://api.themoviedb.org/3/tv/${page.params.id}/season/${
			page.params.season_number
		}?api_key=${get(ApiKey)}&language=en-US`;
		let season_details: Season_type = await fetch(api_url).then((x) => x.json());
		return { props: { season_details } };
	}
</script>

<script lang="ts">
	import Season from '$lib/pages/Season.svelte';
	import { page } from '$app/stores';
	export let season_details: Season_type;
	let movie_id = $page.params.id;
	console.log('Season Details', season_details);
</script>

{#key $page.params.season_number}
	<Season {season_details} {movie_id} />
{/key}
