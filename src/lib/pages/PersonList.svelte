<script lang="ts">
	import PersonCard from '$lib/components/PersonCard.svelte';
	import Skeleton from '$lib/utilities/Skeleton.svelte';
	import { data } from '$lib/stores/store';
</script>

<section
	id="person-list"
	class="bg-skin-tertiary flex flex-wrap justify-around max-w-7xl xl:mt-2 mx-auto xl:rounded-2xl"
>
	{#if $data}
		{#each $data as datum}
			<PersonCard {datum} />
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>
