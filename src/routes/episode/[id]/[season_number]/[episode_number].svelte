<script context="module" lang="ts">
	import { get } from 'svelte/store';
	import { ApiKey } from '$lib/stores/store';
	export async function load({ page }) {
		let api_url = `https://api.themoviedb.org/3/tv/${page.params.id}/season/${
			page.params.season_number
		}/episode/${page.params.episode_number}?api_key=${get(ApiKey)}&language=en-US`;
		let episode_details: Episodes = await fetch(api_url).then((x) => x.json());
		return {
			props: {
				episode_details
			}
		};
	}
</script>

<script lang="ts">
	import Episode from '$lib/pages/Episode.svelte';
	import { page } from '$app/stores';
	export let episode_details: Episodes;
</script>

{#key $page.params.season_number}
	<Episode {episode_details} />
{/key}
