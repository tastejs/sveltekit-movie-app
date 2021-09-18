<script lang="ts">
	import { show_name, season_count, show_id } from '$lib/stores/store';
</script>

<div
	class="flex flex-col xl:flex-row bg-skin-primary text-skin-base max-w-7xl xl:rounded-2xl xl:mt-2"
>
	<div class="flex flex-col xl:flex-row xl:p-2 items-center">
		<h3 class="ml-1">{$show_name}</h3>
		<div class="inline-flex justify-end xl:items-center">
			<h4 class="px-2 inline-flex">Season</h4>
			{#each Array($season_count) as _, i}
				<a
					href={`/seasons/${$show_id}/${i + 1}`}
					class="items-center inline-flex px-3 top-0 right-0 text-skin-base  xl:rounded-lg"
					>{i + 1}</a
				>
			{/each}
		</div>
	</div>
</div>
