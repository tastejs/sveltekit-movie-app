<script context="module" lang="ts">
	import { media_type } from '$lib/stores/store';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */

	export async function load({ fetch, page }) {
		const res = await (
			await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'person',
					media: 'person',
					id: page.params.id
				})
			})
		).json();
		const person = await res.res;

		const resp = await (
			await fetch('../api/postData', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					api_ref: 'known_for',
					person: page.params.id
				})
			})
		).json();
		const data = await resp;
		const knownFor = data.res.cast;

		return {
			props: {
				person,
				knownFor
			}
		};
	}
</script>

<script lang="ts">
	import Person from '$lib/pages/Person.svelte';
	$media_type = 'person';

	export let person: PersonType;
	export let knownFor: KnownForType;
</script>

<Person {person} {knownFor} />
