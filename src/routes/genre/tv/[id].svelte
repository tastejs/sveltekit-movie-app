<script lang="ts">
	import MainSection from '$lib/pages/MainSection.svelte';
	import { media_type, ApiKey } from '$lib/stores/store';
	import { page } from '$app/stores';

	$media_type = 'tv';
	$: api_url_start = `https://api.themoviedb.org/3/discover/tv?api_key=`;
	$: api_url_end = `&with_genres=${$page.params.id}&page=`;
</script>

{#key $page.params.id}
	<MainSection {api_url_start} {api_url_end} />
{/key}
