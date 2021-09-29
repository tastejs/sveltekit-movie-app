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

<button class="text-skin-base" on:click={toggleTheme}>
	<div
		class="text-skin-base mr-2 flex text-lg px-3 py-2 rounded-lg border border-transparent focus:outline-none"
		aria-label="Toggle Light and Dark mode"
	>
		{#if $theme === 'dark'}
			<img class="h-8 w-8" src="/icons8-sun-48.png" alt="profile" />
		{:else}
			<div class="h-6 w-6">
				<img src="/icons8-moon-60.png" alt="light mode" />
			</div>
		{/if}
	</div>
</button>
