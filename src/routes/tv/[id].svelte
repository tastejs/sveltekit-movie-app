<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */

	export async function load({ fetch, page }) {
		const res = await fetch('../api/getMovie', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'tv',
				id: page.params.id
			})
		});
		const datas = await res.json();
		const tv_details = await datas.res;

		const trailer = await fetch('../api/getTrailer', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'tv',
				id: page.params.id
			})
		});
		const trailer_details = await trailer.json();
		const trailer_id: number = (await trailer_details.res.results.length)
			? trailer_details.res.results[0].key
			: 999;

		const resp = await fetch('../../api/getCast', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				media: 'tv',
				id: page.params.id
			})
		});
		const casts = await resp.json();
		const cast = await casts.res.cast;
		return {
			props: {
				tv_details,
				trailer_id,
				cast
			}
		};
	}
</script>

<script lang="ts">
	import TvMedia from '$lib/pages/TvMedia.svelte';
	import { page } from '$app/stores';
	export let tv_details: TvType;
	export let trailer_id: number;
	export let cast;

	$media_type = 'tv';
	let movie_id: string = $page.params.id;
</script>

<TvMedia {tv_details} {trailer_id} {cast} {movie_id} />
