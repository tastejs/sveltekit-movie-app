<script context="module" lang="ts">
	import { media_type, data, current_page } from '$lib/stores/store';
	/***
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender: boolean = true;
	export async function load({ params, fetch }) {
		current_page.set(1);
		data.set(undefined);
		const genres = params.id;
		media_type.set(params.media);
		const res = await (
			await fetch('../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'show_genres',
					media: params.media,
					genre: genres,
					page: '1'
				})
			})
		).json();
		data.set(await res.res.results);
		const total_pages = await res.res.total_pages;
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
	export let genres: number;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

<MainSection {total_pages} {genres} />
