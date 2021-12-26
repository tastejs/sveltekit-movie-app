<script context="module" lang="ts">
	import { media_type, data } from '$lib/stores/store';
	import { get } from 'svelte/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
		const res = await (
			await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'search',
					media: get(media_type),
					query: page.params.id,
					page: '1'
				})
			})
		).json();
		data.set(await res.res.results);
		const total_pages = await res.res.total_pages;
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
</script>

<MainSection {total_pages} />
