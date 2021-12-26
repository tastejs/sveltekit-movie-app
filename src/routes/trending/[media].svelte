<script context="module" lang="ts">
	import { media_type, data } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
		data.set(undefined);
		media_type.set(page.params.media as MediaType);
		const res = await (
			await fetch('../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					media: page.params.media,
					api_ref: 'show',
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
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

<MainSection {total_pages} />
