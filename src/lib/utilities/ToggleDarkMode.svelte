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
			<svg
				class="h-6 w-6 stroke-current"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		{:else}
			<svg
				class="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
			</svg>
		{/if}
	</div>
</button>
