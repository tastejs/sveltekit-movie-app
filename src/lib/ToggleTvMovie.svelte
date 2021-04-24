<script lang='ts'>
  import { current_page, media_type } from '$lib/store'
  import { goto } from '$app/navigation';

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

</script>

<section id=tv-movie-toggle class="flex justify-right items-center w-20 md:w-28 h-7 text-textLight border-2 border-border rounded-full">
  <div class="relative">
      <button
        aria-label='Movies'
        class:active={$media_type==='movie'}
        class='inline-flex items-center justify-center whitespace-nowrap content-center text-textLight h-7 w-10 md:w-14 rounded-full border-background
        hover-selected'
        on:click|preventDefault = {toggleMovie}>
          <i class="fa fa-video-camera" aria-hidden="true"></i>
      </button>
  </div>
  <div class="relative">
      <button
      aria-label='Tv Series'
      class='inline-flex items-center justify-center whitespace-nowrap content-center text-textLight h-7 w-10 md:w-14 rounded-full  border-background
      hover-selected'
        class:active={$media_type==='tv'}
        on:click|preventDefault = {toggleTv}>
          <i class="fa fa-television" aria-hidden="true"></i>
      </button>
  </div>
</section>

<style>

  button:hover:not(.active) {
    color:var(--selected);
    cursor: pointer;
  }

  .active {
    
    background-color:var(--selected);
    border: 1px solid #979393;
  }

</style>