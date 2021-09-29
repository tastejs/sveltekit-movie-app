<script context="module" lang="ts">
	import { get } from 'svelte/store';
	import { ApiKey } from '$lib/stores/store';
	export async function load({ page }) {
		let api_url = `https://api.themoviedb.org/3/person/${page.params.id}?api_key=${get(
			ApiKey
		)}&language=en-US`;
		let person: PersonType = await fetch(api_url).then((x) => x.json());
		return { props: { person } };
	}
</script>

<script lang="ts">
	import Person from '$lib/pages/Person.svelte';
	import { media_type } from '$lib/stores/store';
	import { page } from '$app/stores';

	$media_type = 'person';

	export let person: PersonType;
	
</script>

{#key $page.params.id}
	<Person {person} />
{/key}
