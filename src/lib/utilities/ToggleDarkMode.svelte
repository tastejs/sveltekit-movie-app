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
			<span> 
				<!-- <i class="text-yellow-400 fa fa-sun-o" id="toggle-switch" /> -->
				<svg width="18" height="18" id="toggle-switch" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" class="svg-inline--fa fa-sun text-yellow-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"></path></svg>
			</span>
		{:else}
			<!-- <div class="text-skin-inverted h-6 w-6"> -->
			<!-- <img src="/icons8-moon-60.png" alt="light mode" /> -->
			<span> 
				<!-- <i class="text-gray-300 fa fa-moon-o"  /> -->
				<svg width="15" height="18" aria-hidden="true" focusable="false" data-prefix="far" id="toggle-switch" data-icon="moon" class="svg-inline--fa fa-moon text-gray-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"></path></svg>
			</span>
			<!-- </div> -->
		{/if}
	</div>
</button>
