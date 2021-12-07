<script context="module" lang="ts">
	export async function load ({ fetch }) {
		const res = await fetch('./api/getShow', {
			headers: {
      			'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				page: '1'
			})
		});
		const datas = await res.json();
		return {
			props: {
				datas
			}
		};
	};
</script>

<script lang="ts">
	export let datas
	let data = datas.res.results
	let total_pages = datas.res.total_pages
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>


	<MainSection {data} {total_pages} />

