<script lang='ts'>
  import { media_type, ApiKey } from '$lib/store'
  import { getMovieDetails, } from '$lib/fetchData'
  import { getTrailerId } from '$lib/fetchTrailer'
  import { onMount } from 'svelte'
  import { page } from '$app/stores';
  import Media from '$lib/Media.svelte'
  import Spinner from '$lib/Spinner.svelte'

  $media_type= 'tv'
  let movie_id = $page.params.id

  let TV_DETAIL_API = `https://api.themoviedb.org/3/tv/${movie_id}?api_key=${$ApiKey}&language=en-US`
  let VIDEO_API = `https://api.themoviedb.org/3/tv/${movie_id}/videos?api_key=${$ApiKey}&language=en-US`
  
  let movie_details:MovieType[] = []
  let trailer_id:string

  onMount(async()=>{
    getMovieDetails(TV_DETAIL_API).then(x => movie_details = x )
    getTrailerId(VIDEO_API).then(x => trailer_id = x )
  })
</script>

{#if movie_details.length!==0 && trailer_id}
  <Media {movie_details} {trailer_id} {movie_id}/>
  {:else}
  <Spinner />
{/if}