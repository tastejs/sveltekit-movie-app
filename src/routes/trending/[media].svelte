<script context="module" lang="ts">
	import { media_type, data, current_page } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		data.set(undefined);
		current_page.set(1);
		media_type.set(params.media as MediaType);
		const res = await (
			await fetch('../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					media: params.media,
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
