<script context="module" lang="ts">
	
  const ApiKey: string|boolean = import.meta.env.VITE_API_KEY
	const GENRES_MOVIE_API:string =  (`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language-en-GB`)
	const GENRES_TV_API:string=  (`https://api.themoviedb.org/3/genre/tv/list?api_key=${ApiKey}&language-en-GB`)

	type Media = {
		genres:[Genre]
	}

	type MediaPlatform = "movie" | "tv";

	type Genre = {
		id: number;
		name: string;
	}

	type Genres = {
		[Key in MediaPlatform]: Genre[];
	}
	const genre:Genres = {
  	movie: [],
  	tv: []
	}

  export async function load({fetch}) {
    const res_mov:Response = await fetch(GENRES_MOVIE_API)
	  const res_mov_json:Media = await res_mov.json()
		genre.movie = res_mov_json.genres

		const res_tv:Response = await fetch(GENRES_TV_API)
		const res_tv_json:Media = await res_tv.json()
		genre.tv = res_tv_json.genres
		return { props:{genre} }
	}
	
</script>

<script lang="ts">
	import "../global.css";
	export let genre:Genres = {
  	movie: [],
  	tv: []
	}

	import Header from '$lib/Header.svelte'
	import { genres_list } from '$lib/store'

	$genres_list= genre
</script>


<svelte:head>
	<link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap' rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<title>TMDB on Sveltekit</title>
</svelte:head>

<main >
	<Header />
	<section class= 'max-w-7xl mx-auto' >
		<slot></slot>
	</section>
</main>


