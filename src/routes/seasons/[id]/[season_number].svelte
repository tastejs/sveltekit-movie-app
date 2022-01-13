<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		const res = await (
			await fetch('../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'season',
					id: params.id,
					season_number: params.season_number
				})
			})
		).json();
		const season_details = await res.res;
		return {
			props: {
				season_details
			}
		};
	}
</script>

<script lang="ts">
	import Season from '$lib/pages/Season.svelte';
	import { page } from '$app/stores';
	export let season_details: Season_type;
	let tv_id = $page.params.id;
</script>

<Season {season_details} {tv_id} />
