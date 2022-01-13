<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		const res = await (
			await fetch('../../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'episode',
					id: params.id,
					season_number: params.season_number,
					episode_number: params.episode_number
				})
			})
		).json();
		const episode_details = await res.res;
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
