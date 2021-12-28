<script lang="ts">
	import ProgressBar from '$lib/utilities/ProgressBar.svelte';
	import Spinner from '$lib/utilities/Spinner.svelte';
	import Modal from '$lib/utilities/Modal.svelte';
	import Cast from '$lib/components/Cast.svelte';
	import { media_type, trailer_key, video_site } from '$lib/stores/store';
	import { tooltip } from '$lib/utilities/tooltip';

	export let movie_details: MovieType;
	export let trailer_details: Trailer_type[];

	// export let movie_id: string;
	export let cast: CastType[];

	const IMAGE_API = 'https://image.tmdb.org/t/p/';
	let modal: { show: () => any };
	function showModal(trailer: string, site: string): void {
		console.log('function trailer id', trailer);
		$trailer_key = trailer;
		$video_site = site;
		modal.show();
	}

	window.scrollTo({ top: -1000, behavior: 'smooth' });
</script>

{#if movie_details.id && trailer_details}
	<section
		id="media"
		class="text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain xl:bg-cover xl:rounded-2xl"
		style="background-image: url({IMAGE_API}original/{movie_details.backdrop_path})"
	>
		<div
			class="bg-gradient-to-r xl:rounded-2xl"
			style="background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"
		>
			<div class="grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl">
				<div class="col-start-1 col-end-2 ">
					<img
						class="h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto"
						src={movie_details.poster_path
							? IMAGE_API + 'w500' + movie_details.poster_path
							: '/default.jpg'}
						alt="movie poster"
					/>
				</div>
				<div class="xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10">
					<div class="mt-6 xl:mt-0 w-full flex flex-wrap">
						<h4 class="flex w-full xl:text-4xl">
							{movie_details.title}
							<span class="ml-1 text-lg xl:text-4xl text-skin-inverted">
								{movie_details.release_date ? movie_details.release_date.substring(0, 4) : ''}
							</span>
						</h4>
						{#if movie_details.vote_average}
							<div
								class="bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"
							>
								<ProgressBar progress={movie_details.vote_average} />
							</div>
						{/if}

						<div class="xl:flex">
							<div class="pl-0">
								{movie_details.release_date ? movie_details.release_date : 'No Date Available'}
								<span class="hidden xl:px-2 xl:inline">&#x2022;</span>
							</div>
							<div>
								{#each movie_details.genres as { id, name }, i}
									<a class="hover:text-skin-selected" href="/genre/{$media_type}/{id}">{name}</a>
									{#if i !== movie_details.genres.length - 1}<span class="mx-2">|</span>{/if}
								{/each}
							</div>
							{#if 'runtime' in movie_details}
								<div class="duration">
									<span class="hidden xl:px-2 xl:inline">&#x2022;</span>{(movie_details.runtime -
										(movie_details.runtime % 60)) /
										60}h {movie_details.runtime % 60}m
								</div>
							{/if}
						</div>
					</div>
					<div
						class="mb-1 w-full h-48 flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
					>
						<!-- {#if movie_details.vote_average}
							<div
								class="bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"
							>
								<ProgressBar progress={movie_details.vote_average} />
							</div>
						{/if} -->

						{#if trailer_details.length > 0}
							{#each trailer_details as trailer}
								<div class="w-56 flex-shrink-0 pl-2 cursor-pointer hover:opacity-80">
									<button
										on:click={() => showModal(trailer.key, trailer.site)}
										title={trailer.name}
										use:tooltip
									>
										<img
											src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
											alt={trailer.name}
										/>
									</button>
								</div>
							{/each}
							<!-- <p class="flex justify-center ml-4 text-2xl items-center">Play Trailer</p> -->
						{:else}
							<div class="flex pl-5">
								<p class="flex justify-center ml-4">No Trailer Available</p>
							</div>
						{/if}
					</div>
					<div class="w-full">
						<div class="text-lg italic opacity-70">{movie_details.tagline}</div>
						<h4 class="my-2 w-full font-semibold">Overview</h4>
						<div class="overview-details">{movie_details.overview}</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<Cast {cast} />
	<Modal bind:this={modal} />
{:else}
	<Spinner />
{/if}
