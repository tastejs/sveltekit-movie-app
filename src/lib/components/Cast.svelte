<script lang="ts">
	export let cast = []
	const IMAGE_API = 'https://image.tmdb.org/t/p/w200/';
</script>

{#if cast.length}
	<section
		id="people"
		class="max-w-7xl mx-auto xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"
	>
		<h3
			class="text-skin-base flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold"
		>
			Top Billed Cast
		</h3>
		<div
			class="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
		>
			{#each cast as person}
				<div
					class="w-28 flex-shrink-0 mb-2 rounded relative bg-skin-primary m-0.5 sm:mr-3 hover:bg-selected"
				>
					<a href={`/person/${person.id}`}>
						<div class="w-28 h-42 bg-blue-900">
							{#if person.profile_path}
								<img
									class="w-28 h-42 rounded-t"
									src={IMAGE_API + person.profile_path}
									alt="profile"
								/>
							{:else}
								<img
									class="pt-8 flex justify-end items-end w-28 h-42 bottom-0 rounded-t"
									src="/person.svg"
									alt="profile"
								/>
							{/if}
						</div>
						<p
							class="text-center flex justify-center items-center text-skin-base font-semibold line-clamp-1 xl:line-clamp-2"
						>
							{person.character}
						</p>
						<p
							class="text-center flex justify-center items-center text-skin-muted line-clamp-1 xl:line-clamp-2"
						>
							{person.name}
						</p>
					</a>
				</div>
			{/each}
		</div>
	</section>
{/if}
