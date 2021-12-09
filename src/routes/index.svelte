<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
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
	export let data: any[];
	export let total_pages: number;
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	$selected = null;
</script>

<MainSection {data} {total_pages} />
