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
	<div class="   max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center  mt-1">
		<div class="flex flex-row items-center">
			<button
				on:click|preventDefault={toggleHome}
				class="text-3xl text-skin-inverted hover:text-skin-selected"
				href="/"
				>
				<svg width="27" height="30" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house-chimney" class="svg-inline--fa fa-house-chimney" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z"></path></svg>
				<!-- <i class="fa fa-home" /> -->
			</button>
			<Selector />
		</div>
		<ToggleDarkMode />
		<Search />
	</div>
</header>
