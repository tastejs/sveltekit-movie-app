<script lang="ts">
	import { onMount } from 'svelte';
	import { ApiKey } from '$lib/stores/store';

	export let personId: number;

	type TaggedMovie = MovieType & { media_type: 'movie' };
	type TaggedTv = TvType & { media_type: 'tv' };

	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	const KNOWN_FOR_API = `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${$ApiKey}&language=en-US`;

	let movies: (TaggedTv | TaggedMovie)[];
	let films: TaggedMovie[] = [];
	let tv: TaggedTv[] = [];

	function isMovie(x: TaggedTv | TaggedMovie): x is TaggedMovie {
		return x.media_type === 'movie';
	}
	function isTv(x: TaggedTv | TaggedMovie): x is TaggedTv {
		return x.media_type === 'tv';
	}

	onMount(async () => {
		movies = await fetch(KNOWN_FOR_API)
			.then((x) => x.json())
			.then((x) => x.cast);
		console.log(movies);

		films = movies.filter(isMovie);
		tv = movies.filter(isTv);

		films.sort((a, b) => (a.release_date > b.release_date ? -1 : 1));
		tv.sort((a, b) => (a.first_air_date > b.first_air_date ? -1 : 1));
	});
</script>

{#if movies}
	<section id="known-for" class="grid mx-auto">
		{#if films}
			<h3 class="flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold">
				Movies
			</h3>
			<div
				class="text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
			>
				{#each films as movie}
					<div
						class="w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"
					>
						<a class="rounded w-28" href={`/movie/${movie.id}`}>
							<img
								class="object-cover w-28 h-44 rounded-t"
								src={movie.poster_path ? IMAGE_API + movie.poster_path : '/default.jpg'}
								alt={movie.title}
							/>
							<div class="w-28 h-12 p-0.5">
								<p class="text-xs text-center flex justify-center items-center line-clamp-2">
									{movie.title}
								</p>
								<p class="text-xs text-center flex justify-center items-center">
									{movie.release_date ? movie.release_date.substring(0, 4) : ''}
								</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		{/if}
		{#if tv}
			<h3 class="flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold">
				TV
			</h3>
			<div
				class="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
			>
				{#each tv as show}
					<div
						class="w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"
					>
						<a class="rounded w-28" href={`/tv/${show.id}`}>
							<img
								class="object-cover w-28 h-44 rounded-t"
								src={show.poster_path ? IMAGE_API + show.poster_path : '/default.jpg'}
								alt={show.name}
							/>
							<div class="w-28 h-12 p-0.5">
								<p class="text-xs text-center flex justify-center items-center line-clamp-2">
									{show.name}
								</p>
								<p class="text-xs text-center flex justify-center items-center ">
									{show.first_air_date ? show.first_air_date.substring(0, 4) : ''}
								</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</section>
{/if}
