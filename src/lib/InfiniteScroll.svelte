<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  let isLoadMore = false
  let component
  let element

  onMount(() => {
    element = document
  })

  $: if (element) {
    element.addEventListener("scroll", onScroll)
  }

  const onScroll = e => {
    const offset = calcOffset(e)
    if (offset <= 450) {
      if (!isLoadMore) {
        dispatch("loadMore")
      }
      isLoadMore = true
    } else {
      isLoadMore = false
    }
  }

  const calcOffset = (e) => {
    const element = e.target.documentElement
    return (element.scrollHeight - element.clientHeight - element.scrollTop)
  }

  onDestroy(() => {
    if (element) {
      element.removeEventListener("scroll", onScroll)
    }
  })
</script>

<div bind:this={component} id="svelte-infinite-scroll" class='w-0' />