<script lang="ts">
	import {
		media_type
	} from '$lib/stores/store';
	import ProgressBar from '$lib/utilities/ProgressBar.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	export let datum: MovieType;
</script>

<section id="movie-card" class="group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg">
	<a class=""
		href={`/${$media_type}/${datum.id}`}>
		<div class="relative preserve-3d w-full">
			<div class="backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg">
				<img class="oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg  text-skin-muted "
					src={datum.poster_path ? IMAGE_API + datum.poster_path : '/default.jpg' } alt={datum.title} />
				<div class="p-2 xl:ml-4">
					<h6
						class="text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis">
						{datum.title}
					</h6>
					<h6 class="xl:text-lg font-bold">
						{datum.release_date ? datum.release_date.substring(0, 4) : '-'}
					</h6>
				</div>
				<div class="transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80">
					<ProgressBar progress={datum.vote_average} />
				</div>
			</div>
			<!-- <h6 class="mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded">Overview</h6>
			<p class="md:text-base mt-1">{datum.overview}</p> -->
		</div>
	</a>
</section>