<script lang="ts">
	import Search from '$lib/utilities/Search.svelte';
	import Selector from '$lib/utilities/Selector.svelte';
	import { goto } from '$app/navigation';

	import ToggleDarkMode from '$lib/utilities/ToggleDarkMode.svelte';
	import { media_type } from '$lib/stores/store';

	function toggleHome() {
		$media_type = 'movie';
		goto('/');
	}
</script>

<header class=" w-full z-50 fixed top-0  h-11 bg-skin-primary">
	<div class="   max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center  ">
		<div class="flex flex-row items-center">
			<button
				on:click|preventDefault={toggleHome}
				class="text-3xl text-skin-inverted hover:text-skin-selected"
				href="/"
				><i class="fa fa-home" />
			</button>
			<Selector />
		</div>
		<ToggleDarkMode />
		<Search />
	</div>
</header>
