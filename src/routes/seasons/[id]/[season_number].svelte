<script context="module" lang="ts">
	export async function load({fetch, page }) {
		const res =await fetch('../../api/getSeason', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				id: page.params.id,
				season_number: page.params.season_number,
			})
		})
		const datas = await res.json();
		const season_details = await datas.res
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
	// console.log('Season Details', season_details);
</script>


	<Season {season_details} {tv_id} />
