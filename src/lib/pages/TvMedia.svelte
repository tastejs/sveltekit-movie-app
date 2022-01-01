<script lang="ts">
	import ProgressBar from '$lib/utilities/ProgressBar.svelte';
	import Spinner from '$lib/utilities/Spinner.svelte';
	import Modal from '$lib/utilities/Modal.svelte';
	import Cast from '$lib/components/Cast.svelte';
	import {
		media_type,
		trailer_key,
		season_count,
		show_id,
		show_name,
		video_site
	} from '$lib/stores/store';
	import Seasons from '$lib/utilities/Seasons.svelte';
	import { tooltip } from '$lib/utilities/tooltip';

	export let tv_details: TvType;
	export let trailer_details: Trailer_type[];
	export let tv_id: string;
	export let cast: CastType[];

	const IMAGE_API = 'https://image.tmdb.org/t/p/';

	$show_name = tv_details.name;
	$season_count = tv_details.number_of_seasons;
	$show_id = tv_details.id;

	let modal: { show: () => any };
	function showModal(trailer: string, site: string): void {
		console.log('function trailer id', trailer);
		$trailer_key = trailer;
		$video_site = site;
		modal.show();
	}
	window.scrollTo({ top: -1000, behavior: 'smooth' });
</script>

{#if tv_details.id && trailer_details}
	<section
		id="media"
		class="text-skin-inverted md:mt-5 bg-no-repeat bg-right-top bg-contain md:bg-cover md:rounded-2xl"
		style="background-image: url({IMAGE_API}original/{tv_details.backdrop_path})"
	>
		<div
			class="bg-gradient-to-r md:rounded-2xl"
			style="background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"
		>
			<div
				class="grid max-w-7xl md:grid-cols-[20rem_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] px-10 py-8 mx-auto md:rounded-2xl"
			>
				<div class="col-start-1 col-end-2 ">
					<img
						class="h-96 w-64 md:h-120 md:w-80 overflow-hidden rounded-2xl mx-auto"
						src={tv_details.poster_path
							? IMAGE_API + 'w500' + tv_details.poster_path
							: '/default.jpg'}
						alt="movie poster"
					/>
				</div>
				<div class="md:col-start-2 md:col-end-5 flex flex-wrap content-start md:pl-10">
					<div class="mt-6 md:mt-0 w-full mb-6 flex flex-wrap">
						<h4 class="w-full md:text-4xl">
							{tv_details.name}
							<span class="ml-1 text-lg md:text-4xl text-skin-inverted">
								{tv_details ? tv_details.first_air_date.substring(0, 4) : ''}
							</span>
						</h4>
						{#if tv_details.vote_average}
							<div
								class="bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"
							>
								<ProgressBar progress={tv_details.vote_average} />
							</div>
						{/if}
						<div class="md:flex">
							<div class="pl-0">
								{'first_air_date' in tv_details ? tv_details.first_air_date : 'No Date Available'}
								<span class="hidden md:px-2 md:inline">&#x2022;</span>
							</div>
							<div>
								{#each tv_details.genres as { id, name }, i}
									<a class="hover:text-skin-selected" href="/genre/{$media_type}/{id}">{name}</a>
									{#if i !== tv_details.genres.length - 1}<span class="mx-2">|</span>{/if}
								{/each}
							</div>
						</div>
					</div>
					<div
						class="mb-1 w-full md:h-48 flex flex-wrap justify-center md:justify-start md:flex-nowrap md:overflow-y-hidden relative"
					>
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
											alt="movie poster"
										/>
									</button>
								</div>
							{/each}
							<!-- <p class="flex justify-center ml-4 text-2xl items-center">Play Trailers</p> -->
						{:else}
							<div class="flex pl-5">
								<p class="flex justify-center ml-4">No Trailer Available</p>
							</div>
						{/if}
					</div>
					<div class="w-full">
						<div class="text-lg italic opacity-70">{tv_details.tagline}</div>
						<h4 class="my-2 w-full font-semibold">Overview</h4>
						<div class="overview-details">{tv_details.overview}</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<Cast {cast} />

	<Modal bind:this={modal} />

	{#if $media_type === 'tv'}
		{#key tv_details}
			<Seasons {tv_details} {tv_id} />
		{/key}
	{/if}
{:else}
	<Spinner />
{/if}
