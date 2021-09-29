<script lang="ts">
	import MovieList from '$lib/pages/MovieList.svelte';
	import TvList from '$lib/pages/TvList.svelte';
	import PersonList from '$lib/pages/PersonList.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import InfiniteScroll from '$lib/utilities/InfiniteScroll.svelte';
	import { onMount } from 'svelte';
	import { current_page, media_type } from '$lib/stores/store';
	export let api_url: string;
	$current_page = 1;
	let data = [];

	onMount(async () => {
		getData(api_url + $current_page);
	});
	let total_pages = 0;
	async function getData(API: string) {
		const res = await fetch(API);
		const res_json = await res.json();
		data = await res_json.results;
		total_pages = res_json.total_pages;
	}

	async function moreData(API: string) {
		const res = await fetch(API);
		const res_json = await res.json();
		const res_results = await res_json.results;
		data = [...data, ...res_results];
	}
	function loadMorePages() {
		$current_page++;
		moreData(api_url + $current_page);
	}
</script>

<section id="main" class="h-full">
	<PageTitle />

	{#if $media_type === 'person'}
		<PersonList {data} />
	{:else if $media_type === 'movie'}
		<MovieList {data} />
	{:else if $media_type === 'tv'}
		<TvList {data} />
	{/if}

	{#if $current_page < total_pages}
		<InfiniteScroll on:loadMore={() => loadMorePages()} />
	{/if}
</section>
