<script lang="ts">
	import Search from '$lib/utilities/Search.svelte';
	import Selector from '$lib/utilities/Selector.svelte';
	import ToggleDarkMode from '$lib/utilities/ToggleDarkMode.svelte';
</script>

<header class="bg-skin-secondary">
	<div class="max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center h-10">
		<div class="flex flex-row items-center">
			<a class="text-3xl text-skin-base hover:text-skin-selected" href="/"
				><i class="fa fa-home" /></a
			>
			<Selector />
		</div>
		<ToggleDarkMode />
		<Search />
	</div>
</header>
