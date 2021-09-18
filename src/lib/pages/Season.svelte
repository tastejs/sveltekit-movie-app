<script lang="ts">
	import SeasonTitle from '$lib/components/SeasonTitle.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
	let season_details: Season_type[] = [];
	export let api_url: string;
	import { onMount } from 'svelte';

	onMount(async () => {
		season_details = await fetch(api_url).then((x) => x.json());
	});
	
</script>

<SeasonTitle />
{#key api_url}
	<section id="season">
		<div
			class="max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"
		>
			{#if season_details.id}
				<h4 class="pb-8">Season Information</h4>
				{#each season_details.episodes as episode, key}
					<div class="flex flex-col pb-4">
						<div class="text-skin-base">
							<img
								class="mx-auto block p-0 max-h-full max-w-full "
								src={episode.still_path ? IMAGE_API + episode.still_path : '/default.jpg'}
								alt="episode"
							/>
						</div>
						<div class="ml-2 block">
							<h4>{key + 1}. {episode.name}</h4>
							<hr />
							<h6>Air Date: {episode.air_date}</h6>
							<h6>Overview:</h6>
							<h6 class="text-skin-muted mb-4">{episode.overview}</h6>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</section>
{/key}
