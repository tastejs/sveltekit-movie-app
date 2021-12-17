<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte';
	import { data } from '$lib/stores/store';
	import Skeleton from '$lib/utilities/Skeleton.svelte';
</script>

<section
	id="movie-list"
	class="bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl"
>
	{#if $data}
		{#each $data as datum}
			<MovieCard {datum} />
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
