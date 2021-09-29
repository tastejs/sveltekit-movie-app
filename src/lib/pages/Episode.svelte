<script lang="ts">
	// import SeasonTitle from '$lib/components/SeasonTitle.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/original';
	export let episode_details: Episodes;
	// let selected_season:number = episode_details.episode_number
</script>

<!-- <SeasonTitle {selected_season} /> -->

<section id="season">
	<div
		class="max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"
	>
		{#if episode_details.id}
			<div class="flex" pt-3>
				<div class="flex flex-col xl:flex-row pb-4">
					<div class="flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none">
						<img
							class="flex max-w-2xl"
							src={episode_details.still_path
								? IMAGE_API + episode_details.still_path
								: '/default.jpg'}
							alt="episode"
						/>
					</div>
				</div>
				<div class="ml-2 block">
					<h4 class="pb-8">Episode Information</h4>
					<h4>Season: {episode_details.season_number} Episode: {episode_details.episode_number}</h4>
					<h4>Episode Name: {episode_details.name}</h4>
					<hr />
					<h6>Air Date: {episode_details.air_date}</h6>
					<h6>Overview:</h6>
					<h6 class=" flex-1 pr-8 text-skin-muted mb-4">{episode_details.overview}</h6>
				</div>
			</div>

			{#if episode_details.guest_stars.length}
				<div>
					<h3>Guest Stars</h3>
					<div
						class="text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
					>
						{#each episode_details.guest_stars as guest_star}
							<div
								class="w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"
							>
								<a class="rounded w-28" href={`/person/${guest_star.id}`}>
									<img
										class="flex xl:w-40 xl: h-60 items-start"
										src={guest_star.profile_path
											? IMAGE_API + guest_star.profile_path
											: '/default.jpg'}
										alt="episode"
									/>
								</a>
								<p>Character {guest_star.character}</p>
								<p>Name {guest_star.name}</p>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			{#if episode_details.crew.length}
				<div>
					<h3>Crew</h3>
					<div
						class="text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
					>
						{#each episode_details.crew as crew_member}
							<div
								class="w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"
							>
								<a class="rounded w-28" href={`/person/${crew_member.id}`}>
									<img
										class="flex xl:w-40 xl: h-60 items-start"
										src={crew_member.profile_path
											? IMAGE_API + crew_member.profile_path
											: '/default.jpg'}
										alt="episode"
									/>
								</a>
								<p>{crew_member.job}</p>
								<p>{crew_member.name}</p>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/if}
	</div>
</section>
<pre>{JSON.stringify(episode_details, null, 2)}</pre>

<!-- "crew": [
    {
      "department": "Directing",
      "job": "Director",
      "credit_id": "5256cb2119c2956ff605cfa2",
      "adult": false,
      "gender": 2,
      "id": 4027,
      "known_for_department": "Directing",
      "name": "Frank Darabont",
      "original_name": "Frank Darabont",
      "popularity": 5.778,
      "profile_path": "/nvOqAQhKtXdHtczgqanoCfltsxJ.jpg"
    }, -->

<!-- "guest_stars": [
					{
					  "character": "Amy Harrison",
					  "credit_id": "5256cb3b19c2956ff605e292",
					  "order": 30,
					  "adult": false,
					  "gender": 1,
					  "id": 131820,
					  "known_for_department": "Acting",
					  "name": "Emma Bell",
					  "original_name": "Emma Bell",
					  "popularity": 1.341,
					  "profile_path": "/nWsmC9JQcg27WcD7X9MxCAMWEox.jpg"
					}, -->
