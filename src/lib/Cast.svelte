<script lang="ts">
	type Person = {
		id: number;
		profile_path: string;
		character: string;
		name: string;
	};
	type Data = {
		cast: [Person];
	};
	import { onMount } from 'svelte';
	import { media_type, ApiKey } from '$lib/store';

	export let movie_id: number;
	const PERSONS_API: string = `https://api.themoviedb.org/3/${$media_type}/${movie_id}/credits?api_key=${$ApiKey}&language=en-US`;
	const IMAGE_API: string = 'https://image.tmdb.org/t/p/w200/';
	let persons: Person[] = [];

	onMount(async () => {
		const res = await fetch(PERSONS_API);
		const data: Data = await res.json();
		persons = data.cast;
		return persons;
	});
</script>

{#if persons.length}
	<section
		id="people"
		class="max-w-7xl mx-auto xl:mt-5 xl:mb-10 bg-secondary xl:pl-5 pt-1 xl:rounded-2xl"
	>
		<h2 class="flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold">
			Top Billed Cast
		</h2>
		<div
			class="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
		>
			{#each persons as person}
				<div
					class="w-28 flex-shrink-0 mb-2 rounded relative bg-primary m-0.5 sm:mr-3 hover:bg-selected"
				>
					<a href={`/person/${person.id}`}>
						<div class="w-28 h-42 bg-indigo-800">
							{#if person.profile_path}
								<img
									class="w-28 h-42 rounded-t"
									src={IMAGE_API + person.profile_path}
									alt="profile"
								/>
							{:else}
								<img
									class="pt-8 flex justify-end items-end w-28 h-42 bottom-0 rounded-t"
									src="/person.svg"
									alt="profile"
								/>
							{/if}
						</div>
						<p
							class="text-center flex justify-center items-center text-yellow-700 font-semibold line-clamp-1 xl:line-clamp-2"
						>
							{person.character}
						</p>
						<p
							class="text-center flex justify-center items-center text-textLight line-clamp-1 xl:line-clamp-2"
						>
							{person.name}
						</p>
					</a>
				</div>
			{/each}
		</div>
	</section>
{/if}
