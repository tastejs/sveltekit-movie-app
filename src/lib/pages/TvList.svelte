<script lang='ts'>
	import TvCard from '$lib/pages/TvCard.svelte'
	import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let data = []

</script>

<section id='movie-list' class='bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl'>
	{#if data.length > 0 } 
		{#each data as datum, i}
			<TvCard key={i} {...datum}/>
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
