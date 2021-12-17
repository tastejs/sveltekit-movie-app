<script context="module" lang="ts">
	import { media_type, data } from '$lib/stores/store';
	import { get } from 'svelte/store';
	export const prerender = true;

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
		data.set(undefined);
		media_type.set(page.params.media as MediaType);
		const res = await fetch('../../api/getShow', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: get(media_type),
				page: '1'
			})
		});
		const datas = await res.json();
		data.set(await datas.res.results);
		const total_pages = await datas.res.total_pages;
		return {
			props: {
				total_pages
			}
		};
	}
</script>

<script lang="ts">
	export let total_pages: number;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

<MainSection {total_pages} />
