<script lang="ts">
	export let tv_details: TvType;
	export let movie_id: string;
	const IMAGE_API = 'https://www.themoviedb.org/t/p/original';
	console.log('movie details', tv_details);
</script>

<section id="Seasons">
	<div
		class="max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"
	>
		<h4 class="pb-8">Season Information</h4>
		{#each tv_details.seasons as episode}
			<div class="flex flex-col xl:flex-row pb-4">
				<a
					href={`/seasons/${movie_id}/${episode.season_number}`}
					class="flex flex-col xl:flex-row text-skin-base xl:rounded-lg"
				>
					<div
						class="flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-40 xl:h-60 xl:items-start"
					>
						<img
							class="flex xl:w-40 xl: h-60 items-start"
							src={episode.poster_path ? IMAGE_API + episode.poster_path : '/default.jpg'}
							alt="episode"
						/>
					</div>
					<div class=" justify-self-center ml-2 block xl:justify-start">
						<h4>{episode.name}</h4>
						<hr />
						<h6>Air Date: {episode.air_date}</h6>
						<h6>Overview:</h6>
						<h6 class=" flex-1 pr-8 text-skin-muted mb-4">{episode.overview}</h6>
					</div>
				</a>
			</div>
		{/each}
	</div>

	<pre>{JSON.stringify(tv_details, null, 2)}</pre>
	<!--   
 
    {#each Object.entries(tv_details) as [key, value]}
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
    <p>First Air Date {tv_details.first_air_date}</p>
    <p>Last Air Date {tv_details.last_air_date}</p>
    <p>Status {tv_details.status}</p> -->
</section>
