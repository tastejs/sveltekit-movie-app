<script>
	import MainSection from '$lib/MainSection.svelte'
	import { page } from '$app/stores';
	import { media_type } from '$lib/store'
	import Spinner from '$lib/Spinner.svelte';

  	const ApiKey = process.env.SAPPER_APP_API_KEY
	const SEARCH_API = `https://api.themoviedb.org/3/search/${$media_type}?api_key=${ApiKey}&language=en-GB"&page=1&include_adult=true&query=`
	
	$: api_url = (SEARCH_API + $page.params.id + '&page=')

</script>

{#if $page.params.id}
	{#key $page}
		<MainSection {api_url} />
	{/key}
{:else}
	<Spinner />
{/if}