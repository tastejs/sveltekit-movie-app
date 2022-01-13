<script lang="ts">
	import { media_type, show_name } from '$lib/stores/store';
	import ProgressBar from '$lib/utilities/ProgressBar.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	export let datum: TvType;
	$show_name = datum.name;
</script>

<section id="tv-card" class="group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg">
	<div class="relative w-full">
		<a
		class=""
		href={`/${$media_type}/${datum.id}`}
	>
		<div class="backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg ">
			<img width="176" height="256"
				class="oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "
				src={datum.poster_path ? IMAGE_API + datum.poster_path : '/default.jpg'}
				alt={datum.name}
			/>
			<div class="p-2 xl:ml-4">
				<h6
					class="text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"
				>
					{datum.name ? datum.name : ' '}
				</h6>
				<h6 class="xl:text-lg font-bold">
					{datum.first_air_date ? datum.first_air_date.substring(0, 4) : '-'}
				</h6>
			</div>
			<div class="transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80">
				<ProgressBar progress={datum.vote_average} />
			</div>
		</div>

			<!-- <h6 class="mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded">Overview</h6>
			<p class="md:text-base mt-1">{datum.overview}</p> -->
		</a>
	</div>
</section>
