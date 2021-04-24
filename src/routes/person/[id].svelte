<script lang='ts'>
  import { onMount } from  'svelte'
  import Person from '$lib/Person.svelte'
  import Spinner from '$lib/Spinner.svelte'
  import { ApiKey, media_type } from '$lib/store'
  import { page } from '$app/stores';

  let PERSONS_API = `https://api.themoviedb.org/3/person/${$page.params.id}?api_key=${$ApiKey}&language=en-US`
  $media_type = 'person'
 
  let person:PersonType[] = []

  onMount(async () => {
    person = await fetch(PERSONS_API)
    .then(x => x.json())
	})

</script>

{#if person.length !==0}
  <Person {person}/>
{:else}
  <Spinner />
{/if}
