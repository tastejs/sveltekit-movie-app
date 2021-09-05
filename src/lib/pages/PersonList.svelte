<script lang='ts'>
	import PersonCard from '$lib/pages/PersonCard.svelte'
	import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let data = []

</script>
<section id='movie-list' class='bg-skin-tertiary flex flex-wrap justify-around max-w-7xl xl:mt-2 mx-auto xl:rounded-2xl'>
	{#if data.length > 0 } 
		{#each data as person, i}
			<PersonCard key={i} {...person}/>
		{/each}
	{:else}
		<Skeleton/>
	{/if}
</section>
