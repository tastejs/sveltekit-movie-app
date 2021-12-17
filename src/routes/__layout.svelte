<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	import { tv_genres, movie_genres } from '$lib/stores/store';
	export async function load({ fetch }) {
		const resTv = await fetch('api/getTvGenres');
		const resTv_json = await resTv.json();
		tv_genres.set(resTv_json.tv_genres);

		const resMovie = await fetch('api/getMovieGenres');
		const resMovie_json = await resMovie.json();
		movie_genres.set(resMovie_json.movie_genres);

		return {};
	}
</script>

<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { theme } from '$lib/stores/theme-store';
	theme.init();
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
