<script>
	export let movie_details;
	const IMAGE_API = 'https://www.themoviedb.org/t/p/original';
</script>

<section id="Seasons">
	<div
		class="text-skin-base max-w-7xl mx-auto xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"
	>
		<h2 class="pb-8">Season Information</h2>

		{#each movie_details.seasons.reverse() as season}
			{#if season.episode_count !== 0}
				<div class="flex flex-col pb-4">
					<a
						href={`/seasons/${movie_details.id}/${season.season_number}`}
						class="text-skin-base  xl:rounded-lg"
					>
						<div class="text-skin-base">
							<img
							class="mx-auto block p-0 max-h-full max-w-full "
								src={season.poster_path ? IMAGE_API + season.poster_path : '/default.jpg'}
								alt="season"
							/>
						</div>
						<div class="ml-2 block">
							<h4>{season.name}</h4>
							<hr />
							<h6>Air Date: {season.air_date}</h6>
							<h6 class="text-skin-muted">Number of episodes: {season.episode_count}</h6>
							{#if season.overview}
								<h6>Overview:</h6>
								<h6 class="text-skin-muted">{season.overview}</h6>
							{/if}
						</div>
					</a>
				</div>
			{/if}
		{/each}

		<!--    
    <pre>{JSON.stringify(movie_details, null, 2)}</pre>
 
 
    {#each Object.entries(movie_details) as [key, value]}
        {#if typeof {key}==='object'}
             {#each Object.entries[key] as [key1, value1]}
            <h1>OBJECT IN OBJECT</h1>
            <h4>{key}</h4>
            <p>{value}</p>
            {/each}

        {:else}
            <h4>{key}</h4>
            <p>{value}</p>
            {/if}
    {/each}
    <p>First Air Date {movie_details.first_air_date}</p>
    <p>Last Air Date {movie_details.last_air_date}</p>
    <p>Status {movie_details.status}</p> -->
	</div>
</section>
