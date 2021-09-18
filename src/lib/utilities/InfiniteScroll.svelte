<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let isLoadMore = false;
	let component: HTMLDivElement;
	let element: Document;

	onMount(() => {
		element = document;
	});

	$: if (element) {
		element.addEventListener('scroll', onScroll);
	}

	const onScroll = (ev: Event) => {
		const offset = calcOffset(ev);
		if (offset <= 450) {
			if (!isLoadMore) {
				dispatch('loadMore');
			}
			isLoadMore = true;
		} else {
			isLoadMore = false;
		}
	};

	const calcOffset = (e: Event) => {
		const target = e.target as Document;
		const element = target.documentElement;
		return element.scrollHeight - element.clientHeight - element.scrollTop;
	};

	onDestroy(() => {
		if (element) {
			element.removeEventListener('scroll', onScroll);
		}
	});
</script>

<div bind:this={component} id="svelte-infinite-scroll" class="w-0" />
