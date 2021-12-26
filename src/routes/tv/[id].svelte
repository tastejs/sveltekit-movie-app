<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
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
					id: page.params.id
				})
			})
		).json();
		const tv_details = await res.res;

		const trailer = await fetch('../api/postData', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				api_ref: 'trailer',
				media: 'tv',
				id: page.params.id
			})
		});
		const trailer_details = await trailer.json();
		const trailer_id: number = (await trailer_details.res.results.length)
			? trailer_details.res.results[0].key
			: 999;

		const resp = await (
			await fetch('../../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'cast',
					media: 'tv',
					id: page.params.id
				})
			})
		).json();
		const cast = await resp.res.cast;
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

	let tv_id: string = $page.params.id;
</script>

<TvMedia {tv_details} {trailer_id} {cast} {tv_id} />
