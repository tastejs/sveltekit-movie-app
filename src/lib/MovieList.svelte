<script>
	import MovieCard from '$lib/MovieCard.svelte'
	import Spinner from '$lib/Spinner.svelte'
	export let movies = []

</script>

<section id='movie-list' class='flex flex-wrap justify-around max-w-7xl mx-auto xl:rounded-2xl'>
	{#if movies.length > 0 } 
		{#each movies as movie, i}
			<MovieCard key={i} {...movie}/>
		{/each}
	{:else}
		<Spinner />
	{/if}
</section>
