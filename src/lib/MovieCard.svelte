<script lang='ts'>
  import { media_type } from  '$lib/store'
  import ProgressBar from '$lib/ProgressBar.svelte'
  import Spinner from '$lib/Spinner.svelte'
  const IMAGE_API = 'https://image.tmdb.org/t/p/w300'
  

  export let poster_path
  export let name
  export let title
  export let vote_average
  export let overview
  export let id
  export let release_date
  release_date ? release_date : 0
  export let first_air_date
  

</script>
{#if id}

  <section id='movie-card' class='group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg'>
    <div class= 'relative preserve-3d w-full duration-700 group-hover:rotate-y-180' >
      <div class='backface-hidden top-0 right-0 text-textDark bg-white xl:rounded-lg'>
        <img class='oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg  text-gray-300 bg-gray-300 'src={poster_path ? IMAGE_API + poster_path : '/default.jpg' } alt={title?title:name} /> 
        <div class='p-2 xl:ml-4'>
          <h6 class='text-sm xl:text-lg text-textDark w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis'>{ title?title:name}</h6>
          <h6 class='xl:text-lg font-bold'>{release_date ? release_date.substring(0,4) : first_air_date ? first_air_date.substring(0,4): '-'}</h6>
        </div>
        <div class='transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80'>
          <ProgressBar progress={vote_average} />
        </div>
      </div>
      <a class='w-full backface-hidden text-textDark top-0 right-0 bg-white rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm border-t-8 overflow-auto transform duration-300 z-10'
        href={`/${$media_type}/${id}`}>
        <h6 class='mt-1 xl:text-xl uppercase text-white bg-secondary pl-2 rounded'>Overview</h6>
        <p class='md:text-base mt-1'>{overview}</p>
      </a>
    </div>
  </section>
 
{:else}
  <Spinner />
{/if}