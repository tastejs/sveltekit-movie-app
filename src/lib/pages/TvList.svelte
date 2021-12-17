<script lang="ts">
	import TvCard from '$lib/components/TvCard.svelte';
	import { data } from '$lib/stores/store';
	import Skeleton from '$lib/utilities/Skeleton.svelte';
</script>

<section
	id="movie-list"
	class="bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl"
>
	{#if $data}
		{#each $data as datum}
			<TvCard {datum} />
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
