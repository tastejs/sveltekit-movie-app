<script lang="ts">
	import { goto } from '$app/navigation';
	import { tv_genres, movie_genres, media_type, selected } from '$lib/stores/store';
</script>

<div class="bg-skin-primary w-full">
	<div class="flex flex-row p-1">
		<div class="p-1 m-1 flex flex-col bg-skin-secondary">
			<h6 class="uppercase text-skin-base">
				<span class="mr-2"><i class="fa fa-video-camera" aria-hidden="true" /></span>Movies
			</h6>
			<div class="py-0.5 justify-center bg-skin-inverted" />
			<ul class=" text-sm flex flex-col justify-center">
				{#each $movie_genres as genre}
					<li class="flex">
						<button
							aria-label={genre.name}
							class="hover:bg-skin-primary p-1 block text-skin-base hover:text-skin-selected whitespace-nowrap"
							class:bg-selected={$selected === genre.id && $media_type === 'movie'}
							on:click|preventDefault={() => {
								$selected = genre.id;
								goto(`/genre/movie/${genre.id}`);
							}}
						>
							{genre.name}
						</button>
					</li>
				{/each}
			</ul>
		</div>
		<div class="p-1 m-1 flex flex-col bg-skin-secondary">
			<h6 class="uppercase flex text-skin-base">
				<span class="mr-2"><i class="fa fa-tv" aria-hidden="true" /></span>Tv
			</h6>
			<p class="py-0.5 justify-center text-skin-base" />
			<ul class="text-sm flex flex-col justify-center">
				{#each $tv_genres as genre}
					<li class="flex">
						<button
							class="hover:bg-skin-primary p-1 block text-skin-base hover:text-skin-selected whitespace-nowrap"
							class:bg-selected={$selected === genre.id && $media_type === 'tv'}
							on:click|preventDefault={() => {
								$selected = genre.id;
								goto(`/genre/tv/${genre.id}`);
							}}
						>
							{genre.name}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
