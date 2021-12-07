<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	media_type.set('movie')
	export const load = async ({ fetch, page }) => {
		const genres = page.params.id
		const res = await fetch('../../api/getShowGenre', {
			headers: {
      			'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				page: '1',
				genre: genres
			})
		});
		const datas = await res.json();
		const data = await datas.res.results;
		const total_pages = await datas.res.total_pages;
		return {
			props: {
				data,
				total_pages,
				genres
			}
		};
	}
</script>

<script lang="ts">
	export let data;
	export let total_pages:number;
	export let genres

	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	// $media_type = 'movie'
	$selected = null;
</script>


	<MainSection {data} {total_pages} {genres} />

