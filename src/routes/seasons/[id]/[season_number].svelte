<script lang="ts">
	import Season from '$lib/pages/Season.svelte';
	import { ApiKey, media_type } from '$lib/stores/store';
	import { page } from '$app/stores';

	$: api_url = `https://api.themoviedb.org/3/tv/${$page.params.id}/season/${$page.params.season_number}?api_key=${$ApiKey}&language=en-US`;

	$media_type = 'tv';
</script>

{#key $page.params.season_number}
	<Season {api_url} />
{/key}
