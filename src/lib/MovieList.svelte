<script lang='ts'>
	import MovieCard from '$lib/MovieCard.svelte'
	import Spinner from '$lib/Spinner.svelte'
	import Skeleton from './skeleton.svelte';
	export let data = []

</script>

<section id='movie-list' class='bg-primary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl'>
	{#if data.length > 0 } 
		{#each data as datum, i}
			<MovieCard key={i} {...datum}/>
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
