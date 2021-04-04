<script>
  import ProgressBar from '$lib/ProgressBar.svelte'
  import Spinner from '$lib/Spinner.svelte'
  import Modal from "$lib/Modal.svelte"
  import Cast from './Cast.svelte'

  export let movie_details
  export let trailer_id
  export let movie_id

  const IMAGE_API = "https://image.tmdb.org/t/p/"
  
  let modal;
  window.scrollTo({top: -1000, behavior: 'smooth'})

</script>

{#if movie_details.id && trailer_id}
  <section id='media' class='xl:mt-5 bg-right-top bg-contain xl:bg-cover xl:rounded-2xl' style='background-image: url({IMAGE_API}original/{movie_details.backdrop_path})'>
    <div class='overlay xl:rounded-2xl'>  
      <div class='grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl'>
        <div class='col-start-1 col-end-2 '>
          <img class='h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto' 
          src={movie_details.poster_path ? IMAGE_API + 'w500' +  movie_details.poster_path : '/default.jpg'} alt='movie poster'>
        </div>
        <div class='xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10'>
          <div class='mt-6 xl:mt-0 w-full mb-6 flex flex-wrap'>
            <h3 class='w-full xl:text-4xl'>{movie_details.name? movie_details.name: movie_details.title}
              <span class="xl:text-4xl text-gray-300">
                {movie_details.first_air_date ? (movie_details.first_air_date.substring(0,4)) : 
                movie_details.release_date? (movie_details.release_date.substring(0,4)) : ''}
              </span>
            </h3>
            <div class='xl:flex'>
              <div class='pl-0'>
                {movie_details.first_air_date ? movie_details.first_air_date: 
                  movie_details.release_date? movie_details.release_date :'No Date Available'}
                  <span class='hidden xl:px-2 xl:inline'>&#x2022;</span>
              </div>
              <div>
                {#each movie_details.genres as genre, i}
                  <a class='hover:text-textDark' href='/genre/{genre.id}' >{genre.name}</a>
                  {#if (i!==movie_details.genres.length-1)}<span class='mx-2'>|</span>{/if}
                {/each}
              </div>
              {#if movie_details.runtime}
                <div class='duration'><span class='hidden xl:px-2 xl:inline'>&#x2022;</span>{(movie_details.runtime - (movie_details.runtime % 60))/60}h {movie_details.runtime % 60}m</div>
              {/if}
            </div>
          </div>
          <div class='mb-5 w-full h-16 flex items-center justify-start'>
            {#if movie_details.vote_average}
              <div class='bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60'>
                <ProgressBar progress={movie_details.vote_average} />
              </div>
            {/if}
            {#if trailer_id !== '999'}
            <div class='transform -translate-x-10 flex pl-5 cursor-pointer hover:opacity-80' on:click={() => modal.show()}>
              <i class="flex items-center fa fa-play fa-2x" aria-hidden="true"></i>
              <p class='flex justify-center ml-4 text-2xl items-center' >Play Trailer</p>
            </div>
            {:else}
            <div class='flex pl-5'>
              <p class='flex justify-center ml-4'>No Trailer Available</p>
            </div>
            {/if}
          </div>
          <div class='w-full'>
            <div class='text-lg italic opacity-70'>{movie_details.tagline}</div>
            <h4 class='my-2 w-full font-semibold'>Overview</h4>
            <div class='overview-details'>{movie_details.overview}</div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </section>
  
  <Cast {movie_id} />
  
  {#if trailer_id !== '999'}
    <Modal bind:this={modal} {trailer_id}></Modal>
  {/if}
  
{:else}
  <Spinner />
{/if}


<style>
  /* .detail-header {
    border-bottom: 1px solid var(--primary-colour);
    background-position: right -200px top;
    background-size: cover;
    background-repeat: no-repeat;
  } */
  .overlay {
	  background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%);
  }
  /* .keyboard {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  } */

    /* .grid-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 1300px;
    width: 100%;
    z-index: 0;
    box-sizing: border-box;
    margin: auto;
  } */

  /* .poster-img img{
    border-width: 0;
    height: 450px;
    width: 300px;
    min-width: 300px;
    border-radius: 8px;
    overflow: hidden;
  } */

  /* .movie-data {
    flex-wrap: wrap;
    align-items: flex-start;
    box-sizing: border-box;
    padding-left: 40px;
  } */

  /* .title {
    width:100%;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
  } */

    /* .movie-title {
    font-size: 2.2rem;
    font-weight: 600;
    padding: 0;
    margin: 0;
    width: 100%;
  } */

    /* .release_date {
    color:rgb(192, 192, 192);
  } */

  /* .facts {
    display: flex;
  } */

    /* .date {
    padding-left: 0px;
  } */

  
  /* .genres {
    padding-left: 20px;
    position: relative;
    top: 0;
    left: 0;
    text-decoration: none;

  }
  .genres a{
    text-decoration: none;
    font-weight: normal;
  } */

  /* .genres::before {
    font-size: 1.1em;
    line-height: 1;
    content: '\2022';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
    display: inline-flex;
    align-content: center;
    align-items: center;
    z-index: -1;
  } */

  /* .genre {
    margin-left: 5px;
  } 

  .genre:first-child {
    margin: 0;
  }
  .genre:not(:last-child):after {
    content: ", ";
} */

  /* .duration {
    padding-left: 20px;
    position: relative;
    top: 0;
    left: 0;
  }
  .duration:before {
    font-size: 1.1em;
    line-height: 1;
    content: '\2022';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
    display: inline-flex;
    align-content: center;
    align-items: center;
    z-index: -1;
} */
/* .auto {
    margin-bottom: 20px;
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }  */

  /* .rating {
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 68px;
    height: 68px;
    transition: transform .2s;
    transform: scale(0.6);
  } */

    /* .play-trailer p {
    display: flex;
    justify-content: center;
    margin-left: 15px;
    font-size: 1.4rem;
  }
    /* .play-trailer{
    display:flex;
    text-decoration: none;
    padding-left: 20px;
  }
  .play-trailer:hover{
    cursor:pointer;
    text-decoration: none;
    opacity: 0.8;
    
  } */

  /* .header-info {
    width: 100%;
  }
  .tagline {
    margin-bottom: 0;
    font-size: 1.1em;
    font-weight: 400;
    font-style: italic;
    opacity: 0.7;
    z-index: 0;
  } */

  /* .overview {
    margin: 10px 0 8px 0;
    width: 100%;
    font-size: 1.3em;
    font-weight: 600;
  }

















  
  /* a {
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    font-weight: normal;
  } */













  /* @media only screen and (max-width: 600px) {
    .grid-layout {
      display: grid;
      grid-template-columns: 1fr;
      padding-left: 20px;
      padding-right: 20px;
    }
    img {
      margin-left: auto;
      margin-right: auto;
      align-content: center;
      display: flex;
    }
    .movie-data {
      padding-left: 0;
    }
    .movie-title {
      font-size: 1.8rem;
    }
  } */
</style>