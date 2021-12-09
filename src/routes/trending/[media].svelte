<script context="module" lang="ts">
	import { media_type, current_page } from '$lib/stores/store';
	import { get } from 'svelte/store';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */

	export async function load({ fetch, page }) {
		media_type.set(page.params.media as MediaType);
		const res = await fetch('../../api/getShow', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: get(media_type),
				page: get(current_page)
			})
		});
		const datas = await res.json();
		const data = await datas.res.results;
		const total_pages = await datas.res.total_pages;
		return {
			props: {
				data,
				total_pages
			}
		};
	}
</script>

<script lang="ts">
	export let data;
	export let total_pages: number;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

<MainSection {data} {total_pages} />
