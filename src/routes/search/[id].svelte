<script>
	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	import { media_type, ApiKey } from '$lib/stores/store';
	import Skeleton from '$lib/utilities/Skeleton.svelte';

	let SEARCH_API = `https://api.themoviedb.org/3/search/${$media_type}?api_key=${$ApiKey}&language=en-GB"&page=1&include_adult=false&query=`;

	$: api_url = SEARCH_API + $page.params.id + '&page=';
</script>

{#if $page.params.id}
	{#key $page}
		<MainSection {api_url} />
	{/key}
{:else}
	<Skeleton />
{/if}
