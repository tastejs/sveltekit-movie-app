<script lang='ts'>
	import MainSection from '$lib/pages/MainSection.svelte'
	import { media_type, ApiKey } from '$lib/store'
  	import { page } from '$app/stores'
	
	$media_type = 'movie'
	$:api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${$ApiKey}&with_genres=${$page.params.id}&page=`
	
</script>

	{#key ($page.params.id )}
		<MainSection {api_url} />
	{/key}


