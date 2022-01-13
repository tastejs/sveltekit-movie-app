<script lang="ts">
	import { media_type, selected } from '$lib/stores/store';
	import { goto } from '$app/navigation';
	import Genre from '$lib/components/Genre.svelte';

	function toggleMovie() {
		goto('/trending/movie');
	}

	function toggleTv() {
		goto('/trending/tv');
	}

	function togglePerson() {
		goto('/trending/person');
	}
</script>

<div class="pl-6 xl:pl-8 ">
	<div class="group inline-block relative z-50">
		<button
			aria-label="Movies"
			on:click|preventDefault={toggleMovie}
			class:text-skin-selected={$media_type === 'movie'}
			class="text-skin-inverted font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected"
		>
			<span>
				<svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" class="svg-inline--fa fa-video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"></path></svg>
				<!-- <i class="fa fa-video-camera" aria-hidden="true" /> -->
			</span>
			<span class="hidden xl:block mx-2">Movies</span>
		</button>
	</div>
</div>

<div class="pl-6 xl:pl-8 ">
	<div class="group inline-block relative z-50">
		<button
			aria-label="TV Shows"
			on:click|preventDefault={toggleTv}
			class:text-skin-selected={$media_type === 'tv'}
			class="text-skin-inverted font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected"
		>
			<span>
				<svg width="18" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv" class="svg-inline--fa fa-tv" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M512 448H127.1C110.3 448 96 462.3 96 479.1S110.3 512 127.1 512h384C529.7 512 544 497.7 544 480S529.7 448 512 448zM592 0h-544C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h544c26.5 0 48-21.5 48-48v-320C640 21.5 618.5 0 592 0zM576 352H64v-288h512V352z"></path></svg>
				<!-- <i class="fa fa-television" aria-hidden="true" /> -->
			</span>
			<span class="hidden xl:block mx-2">Tv</span>
		</button>
	</div>
</div>

<div class="pl-6 xl:pl-8 ">
	<div class="group inline-block relative z-50">
		<button
			aria-label="People"
			on:click|preventDefault={togglePerson}
			class:text-skin-selected={$media_type === 'person'}
			class="text-skin-inverted font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected"
		>
			<span>
				<svg width="11" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path></svg>
				<!-- <i class="fa fa-user" aria-hidden="true" /> -->
			</span>
			<span class="hidden xl:block mx-2">People</span>
		</button>
	</div>
</div>
{#key $selected}
	<div class="pl-6 xl:pl-8 ">
		<div class="group inline-block relative z-50">
			<button
				aria-label="Genres"
				class="text-skin-inverted font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected"
			>
				<span>
					<svg width="13" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tag" class="svg-inline--fa fa-tag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"></path></svg>
					<!-- <i class="fa fa-tag" aria-hidden="true" /> -->
				</span>
				<span class="hidden xl:block mx-2">Genres</span>
			</button>
			<ul
				class="rounded xl:absolute fixed left-0 hidden bg-skin-primary text-skin-base group-hover:block"
			>
				<Genre />
			</ul>
		</div>
	</div>
{/key}
