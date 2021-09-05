<script>
    import { theme_dark } from '$lib/store'
    function toggle() {
       $theme_dark= !$theme_dark
    }
    
</script>
    
<button class='text-skin-base' on:click={toggle}>
    {#if $theme_dark}
    go light  
    {:else}
    go dark
    {/if}
</button>
