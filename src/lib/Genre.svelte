<script lang='ts'>
	import { genres_list, media_type, selected } from '$lib/store';
</script>

<div class='w-full xl:w-100'>
	<p class="py-0.5 justify-center bg-black" />
	<h4 class="uppercase items-center flex justify-center text-black"><span class='mr-2'><i class="fa fa-video-camera" aria-hidden="true"></i></span>Movies</h4>
	<p class="py-0.5 justify-center bg-black" />
	<div class="flex flex-wrap justify-center">
		{#each $genres_list['movie'] as genre, i}
			<li class="flex">
				<a
					href={`/genre/${genre.id}`}
					class="bg-gray-200 hover:bg-gray-400 p-1 block text-black whitespace-nowrap"
					class:bg-selected={$selected === genre.id && $media_type === 'movie'}
					on:click={() => {
						$selected = genre.id;
						$media_type = 'movie';
					}}
				>
					{genre.name}
				</a>
                {#if (i!==$genres_list['movie'].length-1)}<span class='mx-2'>|</span>{/if}
			</li>
		{/each}
	</div>
	<p class="py-0.5 justify-center bg-black" />
	<h4 class="uppercase items-center flex justify-center text-black"><span class='mr-2'><i class="fa fa-tv" aria-hidden="true"></i></span>Tv</h4>
	<p class="py-0.5 justify-center bg-black" />
	<div class="flex flex-wrap justify-center">
		{#each $genres_list['tv'] as genre, j}
			<li class="flex">
				<a
					href={`/genre/${genre.id}`}
					class="bg-gray-200 hover:bg-gray-400 p-1 block text-black whitespace-nowrap"
					class:bg-selected={$selected === genre.id && $media_type === 'tv'}
					on:click={() => {
						$selected = genre.id;
						$media_type = 'tv';
					}}
				>
					{genre.name}
				</a>
                {#if (j!==$genres_list['tv'].length-1)}<span class='mx-2'>|</span>{/if}
			</li>
		{/each}
	</div>
</div>
<!-- <style>
	.selected, .selected::hover {
    @apply bg-selected;
  }
</style> -->
