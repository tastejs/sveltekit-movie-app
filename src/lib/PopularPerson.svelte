<script lang='ts'>
  import PersonList from '$lib/PersonList.svelte'
  import { onMount } from 'svelte'
  import Spinner from './Spinner.svelte'
  const IMAGE_API = 'https://image.tmdb.org/t/p/w500'
  import { ApiKey, current_page } from '$lib/store'
  import InfiniteScroll from '$lib/InfiniteScroll.svelte'


	$current_page = 1

  const PERSONS_API = `https://api.themoviedb.org/3/person/popular?api_key=${$ApiKey}&language=en-US&page=`
  let data = []

  let total_pages = 0

	onMount(async () => {
			getPeople(PERSONS_API + $current_page)
	})

	async function getPeople (API) {
		const res = await fetch(API)
		const res_json = await res.json()
		data = await res_json.results
		total_pages = res_json.total_pages
	}

 async function morePeople (API) {
		const res = await fetch(API)
		const res_json = await res.json()
		const res_results = await res_json.results
		data = [...data,...res_results ]
		
 }
 function loadMorePages () {
	 $current_page ++
	 morePeople(PERSONS_API + $current_page)
 }

</script>


<section id='main' class='h-full'>
	<PersonList {data}/>
	{#if $current_page < total_pages}
		<InfiniteScroll 	
			on:loadMore={() => loadMorePages()} />
	{/if}
</section>

