<script lang='ts'>
  import Spinner from '$lib/utilities/Spinner.svelte'
  const IMAGE_API = 'https://image.tmdb.org/t/p/w500'
    export let id: number
    export let profile_path: string | null
    export let name: string
    
</script>
  {#if id}
  <section id='main' class='h-full'>
          <section id='person-card' class='w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 bg-skin-primary xl:rounded-lg'>
          <a href={`/person/${id}`} class=' top-0 right-0 text-skin-base  xl:rounded-lg'>
            <img  class='oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-base' src={profile_path === null ?'/person.svg':IMAGE_API + profile_path} alt={name}  /> 
            <div class='p-2 h-18 w-44 xl:w-60 bg-skin-bg'>
              <h6 class='text-sm xl:text-lg text-textDark w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis'>{name}</h6>
              <h6 class='xl:text-lg font-bold'> </h6>
            </div>
            
          </a>
          
      </section>

  </section>
    
  <!--    -->
     
    {:else}
      <Spinner />
    {/if}