<script lang='ts'>
  import { current_page, media_type, selected } from '$lib/store'
  import { goto } from '$app/navigation';
  import Genre from '$lib/Genre.svelte'


  function toggleMovie() {
    if ($media_type !== 'movie'){
      $media_type='movie'
      $current_page = 1
      goto('/')
    }
  }

  function toggleTv() {
    if ($media_type !== 'tv'){
      $current_page = 1
      $media_type='tv'
      goto('/')
    }
  }

  function togglePerson() {
    if ($media_type !== 'person'){
      $current_page = 1
      $media_type='person'
      goto('/')
    }
  }

</script>  
  
  
  <div class="pl-6 xl:pl-8 ">
    <div class="group inline-block relative z-50">
      <button
        aria-label="Movies"
        on:click|preventDefault = {toggleMovie}
        class:text-skin-selected={$media_type==='movie'}
        class="text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected">
        <span><i class="fa fa-video-camera" aria-hidden="true"></i></span>
        <span class="hidden xl:block mx-2">Movies</span>
      </button>
    </div>
  </div>

  <div class="pl-6 xl:pl-8 ">
    <div class="group inline-block relative z-50">
      <button
        aria-label="TV Shows"
        on:click|preventDefault = {toggleTv}
        class:text-skin-selected={$media_type==='tv'}
        class="text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected">
        <span><i class="fa fa-television" aria-hidden="true"></i></span>
        <span class="hidden xl:block mx-2">Tv</span>
      </button>
    </div>
  </div>

  <div class="pl-6 xl:pl-8 ">
    <div class="group inline-block relative z-50">
      <button
        aria-label="People"
        on:click|preventDefault = {togglePerson}
        class:text-skin-selected={$media_type==='person'}
        class="text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected">
        <span><i class="fa fa-user" aria-hidden="true"></i></span>
        <span class="hidden xl:block mx-2">People</span>
      </button>
    </div>
  </div>
  {#key $selected}

  <div class="pl-6 xl:pl-8 ">
    <div class="group inline-block relative z-50">
      <button 
        aria-label="Genres"
        class="text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected">
        <span><i class="fa fa-tag" aria-hidden="true"></i></span>
        <span class="hidden xl:block mx-2">Genres</span>
      </button>
      <ul 
        
        class="rounded xl:absolute fixed left-0 hidden bg-skin-primary text-skin-base pt-4 group-hover:block">
        <Genre />
      </ul>
    </div>
  </div>
  {/key}