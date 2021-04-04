<script>
  import Spinner from './Spinner.svelte'
  const IMAGE_API = 'https://image.tmdb.org/t/p/w500'
    export let id
    export let profile_path
    export let name
</script>
  {#if id}
  <section id='main' class='h-full'>
    <div id='movie-list' class='bg-primary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl'>
          <section id='person-card' class='w-44 xl:w-60 my-0.5 xl:my-2 bg-white xl:rounded-lg'>
          <a href={`/person/${id}`} class=' top-0 right-0 text-textDark  xl:rounded-lg'>
            <img class='oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg'  src={profile_path === null ?'/person.svg':IMAGE_API + profile_path} alt={name} /> 
            <div class='p-2 xl:ml-4'>
              <h6 class='xl:text-lg text-textDark w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis'>{name}</h6>
            </div>
            
          </a>
          
      </section>
      </div>
  </section>
    

     
    {:else}
      <Spinner />
    {/if}