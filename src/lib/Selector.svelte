<script lang='ts'>
  import { current_page, media_type, selected } from './store'
  import { goto } from '$app/navigation';
  import Genre from '$lib/Genre.svelte'
  import { fly, fade } from 'svelte/transition'

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
        on:click|preventDefault = {toggleMovie}
        class:text-selected={$media_type==='movie'}
        class="text-white font-semibold py-2 rounded inline-flex items-center hover:text-selected">
        <span><i class="fa fa-video-camera" aria-hidden="true"></i></span>
        <span class="hidden xl:block mx-2">Movies</span>
      </button>
      <!-- <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/">Popular</a></li>
        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/">Now Playing</a></li>
        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/">Upcoming</a></li>
        <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/">Top Rated</a></li>
      </ul> -->
    </div>
  </div>

  <div class="pl-6 xl:pl-8 ">
    <div class="group inline-block relative z-50">
      <button 
        on:click|preventDefault = {toggleTv}
        class:text-selected={$media_type==='tv'}
        class="text-white font-semibold py-2 rounded inline-flex items-center hover:text-selected">
        <span><i class="fa fa-television" aria-hidden="true"></i></span>
        <span class="hidden xl:block mx-2">Tv</span>
      </button>
      <!-- <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/">Popular</a></li>
        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/">Airing Today</a></li>
        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/">On Air</a></li>
        <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/">Top Rated</a></li>
      </ul> -->
    </div>
  </div>

  <div class="pl-6 xl:pl-8 ">
    <div class="group inline-block relative z-50">
      <button
        on:click|preventDefault = {togglePerson}
        class:text-selected={$media_type==='person'}
        class="text-white font-semibold py-2 rounded inline-flex items-center hover:text-selected">
        <span><i class="fa fa-user" aria-hidden="true"></i></span>
        <span class="hidden xl:block mx-2">People</span>
      </button>
      <!-- <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
        <li class=""><a class="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block text-black whitespace-nowrap" href="/person_popular">Popular People</a></li>
      </ul> -->
    </div>
  </div>
  {#key $selected}

  <div class="pl-6 xl:pl-8 ">
    <div class="group inline-block relative z-50">
      <button 
        class="text-white font-semibold py-2 rounded inline-flex items-center">
        <span><i class="fa fa-tag" aria-hidden="true"></i></span>
        <span class="hidden xl:block mx-2">Genres</span>
      </button>
      <ul 
        
        class="rounded xl:absolute fixed left-0 hidden bg-gray-200 text-gray-700 pt-1 group-hover:block">
        <Genre />
      </ul>
    </div>
  </div>
  {/key}