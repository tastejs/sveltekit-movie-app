<script lang="ts">
	// import { show_name } from '$lib/stores/store';
	// import SeasonTitle from '$lib/components/SeasonTitle.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
	export let season_details: Season_type;
	export let tv_id: string;
</script>

<!-- <SeasonTitle {season_details} /> -->

<section id="season">
	<div
		class="max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"
	>
		{#if season_details.id}
			<h4 class="pb-2">Season Information</h4>
			{#each season_details.episodes as episode}
				<div class=" bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg">
					<a
						href={`/episode/${tv_id}/${season_details.season_number}/${episode.episode_number}`}
						class="flex flex-col xl:flex-row text-skin-base xl:rounded-lg"
					>
						<div
							class="flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"
						>
							<img
								class="flex xl:w-80 xl:h-44 items-start"
								src={episode.still_path ? IMAGE_API + episode.still_path : '/default.jpg'}
								alt="season"
							/>
						</div>
						<div class="ml-2 block">
							<h4>{episode.name}</h4>
							<h6>Air Date: {episode.air_date}</h6>
							<h6>Overview:</h6>
							<h6 class=" flex-1 pr-8 text-skin-muted mb-4">{episode.overview}</h6>
						</div>
					</a>
				</div>
			{/each}
		{/if}
	</div>
	<!-- <pre>{JSON.stringify(season_details, null, 2)}</pre> -->
</section>
