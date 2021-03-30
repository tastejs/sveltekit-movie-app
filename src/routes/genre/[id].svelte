<script>
	import MainSection from '$lib/MainSection.svelte'
	import { media_type, ApiKey } from '$lib/store'
  import { page } from '$app/stores'
  
	$: MOVIE_GENRE_API = `https://api.themoviedb.org/3/discover/${$media_type}?api_key=${$ApiKey}&with_genres=`

</script>
	{#key $page.params.id}
		<MainSection api_url={MOVIE_GENRE_API + $page.params.id + '&page='} />
	{/key}


