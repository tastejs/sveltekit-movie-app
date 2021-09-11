<script>
    import { theme } from '$lib/stores/theme-store'
	const toggleTheme = () => {
		if ($theme === 'dark') {
			$theme = 'light'
		} else {
			$theme = 'dark'
		}
	}
    
</script>
    
<button class='text-skin-base' on:click={toggleTheme}>
    {#if $theme ==='dark'}
    go light  
    {:else}
    go dark
    {/if}
</button>
