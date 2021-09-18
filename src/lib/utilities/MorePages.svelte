<script lang="ts">
	export let total_pages: number;
	import { current_page } from '$lib/stores/store';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleMorePages() {
		$current_page += 1;
		dispatch('change', $current_page);
	}
</script>

{#if total_pages > 1}
	<section class="bg-primary max-w-7xl mx-auto xl:my-3 flex justify-center xl:rounded-full">
		<button
			class="bg-secondary rounded-3xl border-border border-2 mx-1 my-2 text-semibold pb-1 pt-0.5 px-5 flex justify-center w-52 text-textLight hover:text-textDark hover:bg-selected"
			aria-label="Previous"
			on:click|preventDefault={() => handleMorePages()}
		>
			MORE
		</button>
	</section>
{/if}
