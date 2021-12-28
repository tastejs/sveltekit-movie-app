<script lang="ts">
	import MovieList from '$lib/pages/MovieList.svelte';
	import TvList from '$lib/pages/TvList.svelte';
	import PersonList from '$lib/pages/PersonList.svelte';
	import InfiniteScroll from '$lib/utilities/InfiniteScroll.svelte';
	import { current_page, media_type, data } from '$lib/stores/store';
	import { get } from 'svelte/store';
	export let total_pages = 1;
	export let genres: number = undefined;
	export let searching = undefined;

	async function moreData() {
		let res: Response;
		if (searching) {
			res = await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'search',
					media: get(media_type),
					query: searching,
					page: get(current_page)
				})
			});
		} else if (genres === undefined) {
			res = await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'show',
					media: get(media_type),
					page: get(current_page)
				})
			});
		} else {
			res = await fetch('../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'show_genres',
					media: get(media_type),
					page: get(current_page),
					genre: genres
				})
			});
		}

		const datas = await res.json();
		const res_results = datas.res.results;
		$data = [...$data, ...res_results];
	}

	function loadMorePages() {
		$current_page++;
		moreData();
	}
</script>

<section id="main" class="h-full">
	<!-- <PageTitle /> -->

	{#if $media_type === 'person'}
		<PersonList />
	{:else if $media_type === 'movie'}
		<MovieList />
	{:else if $media_type === 'tv'}
		<TvList />
	{/if}

	{#if $current_page < total_pages}
		<InfiniteScroll on:loadMore={() => loadMorePages()} />
	{/if}
</section>
