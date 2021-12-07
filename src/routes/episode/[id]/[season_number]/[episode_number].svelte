<script context="module" lang="ts">
	export async function load({fetch, page }) {
		const res =await fetch('../../../api/getEpisode', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				id: page.params.id,
				season_number: page.params.season_number,
				episode_number: page.params.episode_number
			})
		})
		const datas = await res.json();
		const episode_details = await datas.res
		return {
			props: {
				episode_details
			}
		};
	}
</script>

<script lang="ts">
	import Episode from '$lib/pages/Episode.svelte';
	export let episode_details: Episodes;
</script>


	<Episode {episode_details} />

