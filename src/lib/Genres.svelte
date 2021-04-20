<script lang='ts'>
	import { media_type, genres_list, selected } from '$lib/store'

</script>

	<section id='genres' class='max-w-7xl mx-auto xl:py-0.5'>
		<div class='bg-primary flex overflow-y-hidden h-8 max-w-7xl mx-auto p-0.5 text-xs items-center xl:rounded-full'>
			{#each $genres_list[$media_type] as {id, name}}
				<a 
					on:click="{() => $selected=id}"
					class:selected="{$selected===id}"
					class='bg-secondary text-textLight flex flex-nowrap justify-center border-border rounded-full border-2 no-underline font-semibold px-1 py-0.5 m-0.5 whitespace-nowrap flex-grow hover:bg-selected hover:cursor-pointer'
					href={`/genre/${id}`}>
					{name}
				</a>
			{/each}
		</div>
	</section>


<style>
	.selected {
    background-color: var(--selected);
		cursor: default;
  }
</style>
