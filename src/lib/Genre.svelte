<script lang='ts'>
	import { goto } from '$app/navigation'
	import { genres_list, media_type, selected } from '$lib/stores/store'	
</script>

<div class='bg-skin-primary w-full xl:w-96'>
	<p class="py-0.5 justify-center bg-skin-bg" />
	<h4 class="uppercase items-center flex justify-center text-skin-base"><span class='mr-2'><i class="fa fa-video-camera" aria-hidden="true"></i></span>Movies</h4>
	<p class="py-0.5 justify-center bg-skin-inverted" />
	<div class="flex flex-wrap justify-center">
		{#each $genres_list['movie'] as genre, i }
			<li class="flex">
				<button
					class="hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap"
					class:bg-selected={$selected === genre.id && $media_type === 'movie'}
					on:click|preventDefault={() => {
						$selected = genre.id;
						goto(`/genre/movie/${genre.id}`)
					}}
				>
					{genre.name}
				</button>
                {#if (i!==$genres_list['movie'].length-1)}<span class='mx-2'>|</span>{/if}
			</li>
		{/each}
	</div>
	<p class="py-0.5 justify-center bg-skin-bg" />
	<h4 class="uppercase items-center flex justify-center text-skin-base"><span class='mr-2'><i class="fa fa-tv" aria-hidden="true"></i></span>Tv</h4>
	<p class="py-0.5 justify-center text-skin-base" />
	<div class="flex flex-wrap justify-center">
		{#each $genres_list['tv'] as genre, j }
			<li class="flex">
				<button
					class=" hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap"
					class:bg-selected={$selected === genre.id && $media_type === 'tv'}
					on:click|preventDefault={() => {
						$selected = genre.id;	
						goto(`/genre/tv/${genre.id}`)
					}}
				>
					{genre.name}
				</button>
                {#if (j!==$genres_list['tv'].length-1)}<span class='mx-2'>|</span>{/if}
			</li>
		{/each}
	</div>
</div>
