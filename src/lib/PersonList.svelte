<script>
	import PersonCard from '$lib/PersonCard.svelte'
	import Spinner from '$lib/Spinner.svelte'
	export let data = []

</script>

<section id='movie-list' class='bg-primary flex flex-wrap justify-around max-w-7xl mx-auto xl:rounded-2xl'>
	{#if data.length > 0 } 
		{#each data as person, i}
			<PersonCard key={i} {...person}/>
		{/each}
	{:else}
		<Spinner />
	{/if}
</section>
