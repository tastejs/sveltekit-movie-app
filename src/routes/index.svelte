<script lang="ts">
	import MainSection from '$lib/pages/MainSection.svelte';
	import { media_type, selected } from '$lib/stores/store';
	$selected = null;

	$: api_url_start = `https://api.themoviedb.org/3/trending/${$media_type}/week?api_key=`;
	$: api_url_end = `&language=en-GB&page=`;
</script>

{#key $media_type}
	<MainSection {api_url_start} {api_url_end} />
{/key}
