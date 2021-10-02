<script>
	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	import { media_type, ApiKey } from '$lib/stores/store';
	import Skeleton from '$lib/utilities/Skeleton.svelte';

	$: api_url_start = `https://api.themoviedb.org/3/search/${$media_type}?api_key=`
	$: api_url_end = '&language=en-GB"&page=1&include_adult=false&query=' + $page.params.id + '&page=';
</script>

{#if $page.params.id}
	{#key $page}
	<MainSection {api_url_start} {api_url_end} />
	{/key}
{:else}
	<Skeleton />
{/if}
