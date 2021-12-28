<script lang="ts">
	import { trailer_key, video_site } from '$lib/stores/store';
	let shown = false;
	export function show(): void {
		shown = true;
	}
	export function hide(): void {
		shown = false;
	}
	$: console.log('modal trailer id', $trailer_key);
</script>

{#if shown}
	<section id="trailer" class="top-0 left-0 bottom-0 right-0 bg-gray-800 bg-opacity-60 fixed z-50">
		<div class="absolute top-0 left-0 w-full h-full bg-contain">
			{#if $video_site === 'YouTube'}
				<iframe
					class="iframe absolute top-0 left-0 w-full h-full bg-contain"
					title="Trailer"
					src="https://www.youtube.com/embed/{$trailer_key}?rel=0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					width="1080"
					allowfullscreen
				>
					<track default kind="captions" />
				</iframe>
			{:else if $video_site === 'Vimeo'}
				<iframe
					class="iframe absolute top-0 left-0 w-full h-full bg-contain"
					title="trailer"
					src="https://player.vimeo.com/video/{$trailer_key}"
					frameborder="0"
					allow="autoplay; fullscreen"
					allowfullscreen
				/>
			{/if}
		</div>

		<div
			class="close absolute top-1 left-1 text-red-900 text-4xl xl:text-5xl hover:font-bold"
			on:click={() => hide()}
		>
			<i class="fa fa-window-close" aria-hidden="true" />
		</div>
	</section>
{/if}
