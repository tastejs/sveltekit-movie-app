<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		media_type.set('tv');
		const res = await (
			await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'show_detail',
					media: 'tv',
					id: params.id
				})
			})
		).json();
		const tv_details = await res.res;

		const trailer = await (
			await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'trailer',
					media: 'tv',
					id: params.id
				})
			})
		).json();
		const trailer_details = trailer.res.results;
		const resp = await (
			await fetch('../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'cast',
					media: 'tv',
					id: params.id
				})
			})
		).json();
		const cast = await resp.res.cast;
		return {
			props: {
				tv_details,
				trailer_details,
				cast
			}
		};
	}
</script>

<script lang="ts">
	import TvMedia from '$lib/pages/TvMedia.svelte';
	import { page } from '$app/stores';
	export let tv_details: TvType;
	export let trailer_details: Trailer_type[];
	export let cast: CastType[];

	let tv_id: string = $page.params.id;
</script>

<TvMedia {tv_details} {trailer_details} {cast} {tv_id} />
