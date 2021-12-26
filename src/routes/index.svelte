<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	import { data } from '$lib/stores/store';
	// import { post } from './api/apiCalls';
	export async function load({ fetch }) {
		data.set(undefined);
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
