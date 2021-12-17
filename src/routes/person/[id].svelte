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
				media: 'person',
				id: page.params.id
			})
		});
		const datas = await res.json();
		const person = await datas.res;

		const resp = await fetch('../api/getKnownFor', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				person: page.params.id
			})
		});
		const data = await resp.json();
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
	export let knownFor;
</script>

<Person {person} {knownFor} />
