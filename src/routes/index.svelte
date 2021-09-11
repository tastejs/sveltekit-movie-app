<script lang='ts'>
	import MainSection from '$lib/pages/MainSection.svelte'
	import { media_type, ApiKey, selected } from '$lib/stores/store'
	$selected = null
	
	$: api_url = `https://api.themoviedb.org/3/trending/${$media_type}/week?api_key=${$ApiKey}&language=en-GB&page=`

</script>

{#key $media_type}
	<MainSection {api_url}/>
{/key}