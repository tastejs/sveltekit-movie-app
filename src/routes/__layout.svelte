<script context="module" lang="ts">
	import { get } from 'svelte/store';
	import { ApiKey } from '$lib/stores/store';
	const GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${get(
		ApiKey
	)}&language-en-GB`;
	const GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${get(
		ApiKey
	)}&language-en-GB`;

	export const load = async ({ fetch }) => {
		const res_mov: Response = await fetch(GENRES_MOVIE_API);
		const res_mov_json: Media = await res_mov.json();
		let movie_genre: Array<Genre> = res_mov_json.genres;

		const res_tv: Response = await fetch(GENRES_TV_API);
		const res_tv_json: Media = await res_tv.json();
		let tv_genre: Array<Genre> = res_tv_json.genres;

		return {
			props: {
				tv_genre,
				movie_genre
			}
		};
	};
</script>

<script lang="ts">
	import '../app.postcss';
	export let tv_genre: Array<Genre>;
	export let movie_genre: Array<Genre>;
	import Header from '$lib/components/Header.svelte';
	import { tv_genres, movie_genres } from '$lib/stores/store';
	import { theme } from '$lib/stores/theme-store';
	theme.init();
	$tv_genres = tv_genre;
	$movie_genres = movie_genre;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
	<title>TMDB on Sveltekit</title>
	<meta name="description" content="TMDB movie & tv database" />
	<meta name="keywords" content="HTML, CSS, JavaScript, svelte" />
	<meta name="author" content="Wayne Morgan" />
</svelte:head>

<main class:$theme class="bg-skin-bg min-h-screen">
	<Header />
	<section class="max-w-7xl mx-auto">
		<slot />
	</section>
</main>
