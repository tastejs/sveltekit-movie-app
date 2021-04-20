<script lang='ts'>
	import MovieList from './MovieList.svelte'
	import PersonList from './PersonList.svelte'
	// import Pagination from './Pagination.svelte'
	// import MorePages from './MorePages.svelte'
	import InfiniteScroll from '$lib/InfiniteScroll.svelte'
	// import Genres from  './Genres.svelte'
	import { onMount } from 'svelte'
	import { current_page, media_type } from './store'
	export let api_url
	$current_page = 1
	let data =[]
	
	onMount(async () => {
		getData(api_url + $current_page)
	})
	let total_pages = 0
	async function getData (API) {
		const res = await fetch(API)
		const res_json = await res.json()
		data = await res_json.results
		total_pages = res_json.total_pages
	}

	async function moreData (API) {
			const res = await fetch(API)
			const res_json = await res.json()
			const res_results = await res_json.results
			data = [...data,...res_results ]
			
	}
	function loadMorePages () {
		$current_page ++
		moreData(api_url + $current_page)
	}

</script>

<!-- <Genres />

{#if total_pages&&$current_page}
	<Pagination
		{total_pages}
		on:change ="{(ev) => getMovies(api_url + ev.detail)}">
	</Pagination>
{/if} -->

<section id='main' class='h-full'>
	{#if $media_type === 'person'}
		<PersonList {data}/>
	{:else}
		<MovieList {data}/>
	{/if}

	{#if $current_page < total_pages}
		<InfiniteScroll 	
			on:loadMore={() => loadMorePages()} />
	{/if}
</section>





<!-- {#if (total_pages-$current_page)}
	<MorePages 
    {total_pages}
    on:change="{(ev) => moreMovies(api_url + ev.detail)}">
	</MorePages>
{/if} -->
