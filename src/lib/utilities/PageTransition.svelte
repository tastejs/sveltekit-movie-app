<script>
  import { fade } from 'svelte/transition';
</script>

  <div
    in:fade="{{ duration: 600, delay: 550 }}"
    out:fade="{{ duration: 600 }}" 
    >
    <slot/>
  </div>