<script context="module" lang="ts">
	import { media_type, data } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;
	export async function load({ fetch, page }) {
		data.set(undefined);
		const genres = page.params.id;
		media_type.set(page.params.media);
		const res = await fetch('../../api/getShowGenre', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: page.params.media,
				page: '1',
				genre: genres
			})
		});
		const datas = await res.json();
		data.set(await datas.res.results);
		const total_pages = await datas.res.total_pages;
		return {
			props: {
				total_pages,
				genres
			}
		};
	}
</script>

<script lang="ts">
	export let total_pages: number;
	export let genres;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

<MainSection {total_pages} {genres} />
