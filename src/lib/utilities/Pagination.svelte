<script lang='ts'>
  export let total_pages:number
  import { current_page } from '$lib/stores/store'  

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  let pages=[]
  const LEFT_PAGE = 'LEFT';
  const RIGHT_PAGE = 'RIGHT';
  const totalNumbers = 9
  const totalBlocks = 11

  // function rangex(size, startAt = 0) {
  //   return [...Array(size).keys()].map(i => i + startAt);
  // }

  function range(from:number, to:number) {
    let i = from;
    const range = []
    while (i <= to) {
      range.push(i)
      i += 1
    }
    return range
  }

  function fetchPageNumbers() {
    if (total_pages > totalBlocks) {
      let startPage = (Math.max(2, $current_page - 3))
      let endPage = Math.min(total_pages - 1, $current_page + 3);
      pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (total_pages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages]
        } else if (!hasLeftSpill && hasRightSpill) {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE]
        } else if (hasLeftSpill && hasRightSpill)  {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
      }
      pages = [1,...pages,total_pages]
    } else {
    pages = range(1, total_pages)
  }
}
  function handleClick(page:number) {
    if (page !== $current_page) {
      $current_page = page
      dispatch('change', page);
    }
  }
  
  $: fetchPageNumbers()
  
   
</script>

{#if (total_pages > 1) }
  <section id='pagination' class='max-w-7xl mx-auto xl:py-0.5 justify-between' >
    <div class='bg-primary flex flex-nowrap justify-around xl:justify-between p-0.5 h-8 text-xs xl:rounded-full' >
      {#each pages as page}
      {#if ($current_page === page)}
      <button 
        class=" active bg-secondary m-0.5 text-textLight w-24 border-border  no-underline rounded-full border-2 "
        on:click|preventDefault ="{() => handleClick(page) }">
        { page }
      </button>

        {:else if (page === LEFT_PAGE)}
          <button 
            class="bg-secondary m-0.5 text-textLight w-24 border-border  no-underline rounded-full border-2"
            aria-label="Previous" 
            on:click|preventDefault ="{() => handleClick($current_page -1)}">
            <i class="fa fa-angle-left"></i>
          </button>
          {:else if (page === pages[0])}
          <button 
            class=" bg-secondary m-0.5 text-textLight w-24 border-border  no-underline rounded-full border-2 "
            on:click|preventDefault ="{() => handleClick(page) }">
            { page }
          </button>
          {:else if (page === pages[0])}
          <button 
            class="bg-secondary m-0.5 text-textLight w-24 border-border  no-underline rounded-full border-2 "
            on:click|preventDefault ="{() => handleClick(page) }">
            { page }
          </button>
          {:else if (page === pages[pages.length -1])}
          <button 
            class="bg-secondary m-0.5 text-textLight w-24 border-border  no-underline rounded-full border-2 "
            on:click|preventDefault ="{() => handleClick(page) }">
            { page }
          </button>
        {:else if (page === RIGHT_PAGE)}
          <button 
            class="bg-secondary m-0.5 text-textLight w-24 border-border  no-underline rounded-full border-2"
            aria-label="Next"
            on:click|preventDefault ="{() => handleClick($current_page + 1)}">
            <i class="fa fa-angle-right"></i>
          </button>
        {:else}
          <button 
            class="hidden sm:inline bg-secondary m-0.5 text-textLight w-24 border-border  no-underline rounded-full border-2 "
            on:click|preventDefault ="{() => handleClick(page) }">
            { page }
          </button>
        {/if}
      {/each}
    </div>
  </section>
{/if}

<style>
  i {
    font-size: 14px;
  }
  .active {
    background-color:var(--selected);
  }

</style>