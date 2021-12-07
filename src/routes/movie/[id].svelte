<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';

	export const load = async ({ page , fetch }) => {
		const res =await fetch('../api/getMovie', {
			headers: {
				'Content-Type' : 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				id: page.params.id
			})
		})
		const datas = await res.json()
		const movie_details = await datas.res

		const trailer = await fetch ('../api/getTrailer', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				id: page.params.id
			})
		})
		const trailer_details = await trailer.json()
		const trailer_id: number = await trailer_details.res.results.length ? trailer_details.res.results[0].key : 999

		const resp = await fetch('../../api/getCast', {
		headers: {
      			'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'movie',
				id: page.params.id
			})
		});
		const casts = await resp.json()
		const cast = await casts.res.cast
		return {
			props: {
				movie_details,
				trailer_id,
				cast
			}
		};
	}
</script>

<script lang="ts">
	import MovieMedia from '$lib/pages/MovieMedia.svelte';
	// import { page } from '$app/stores';
	import Spinner from '$lib/utilities/Spinner.svelte';
	export let movie_details: MovieType;
	export let trailer_id: number;
	export let cast
	$media_type = 'movie';
	// let movie_id: string = $page.params.id;
</script>


	<MovieMedia {movie_details} {trailer_id} {cast}/>
