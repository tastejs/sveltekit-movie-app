<script>
  import MainSection from '$lib/MainSection.svelte'
  import { media_type, ApiKey } from '$lib/store'
  
  $: api_url = `https://api.themoviedb.org/3/person/popular?api_key=${$ApiKey}&language=en-US&page=`

  $media_type = 'person'

</script>

<MainSection {api_url}/>