<script lang="ts">
	import PersonCard from '$lib/components/PersonCard.svelte';
	import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let data: PersonType[]=[]
</script>

<section
	id="movie-list"
	class="bg-skin-tertiary flex flex-wrap justify-around max-w-7xl xl:mt-2 mx-auto xl:rounded-2xl"
>
	{#if data.length > 0}
		{#each data as datum}
			<PersonCard {datum} />
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
