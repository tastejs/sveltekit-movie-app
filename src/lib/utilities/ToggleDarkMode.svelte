<script>
	import { theme } from '$lib/stores/theme-store';
	const toggleTheme = () => {
		if ($theme === 'dark') {
			$theme = 'light';
		} else {
			$theme = 'dark';
		}
	};
</script>

<button class="text-skin-inverted" on:click={toggleTheme}>
	<div
		class="text-skin-inverted mr-2 flex text-lg px-3 py-2 rounded-lg border border-transparent focus:outline-none"
		aria-label="Toggle Light and Dark mode"
	>
		{#if $theme === 'dark'}
			<!-- <img class="h-8 w-8" src="/sun_light_mode_day-512.webp" alt="profile" /> -->
			<span> <i class="text-yellow-400 fa fa-sun-o" id="toggle-switch" /></span>
		{:else}
			<!-- <div class="text-skin-inverted h-6 w-6"> -->
			<!-- <img src="/icons8-moon-60.png" alt="light mode" /> -->
			<span> <i class="text-gray-300 fa fa-moon-o" id="toggle-switch" /></span>
			<!-- </div> -->
		{/if}
	</div>
</button>
