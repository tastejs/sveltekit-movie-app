<script lang='ts'>
	// import ToggleTvMovie from './ToggleTvMovie.svelte'
	import Search from './Search.svelte';
	import Selector from '$lib/Selector.svelte';
</script>

<header class="bg-secondary">
	<div class="max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center h-10">
		<div class="flex flex-row items-center">
			<a class="text-3xl text-textLight hover:text-selected" href="/"><i class="fa fa-home" /></a>
			<Selector />
		</div>
		<!-- <ToggleTvMovie /> -->
		<Search />
	</div>
</header>
