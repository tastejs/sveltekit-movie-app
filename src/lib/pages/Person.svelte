<script lang="ts">
	import KnownFor from '$lib/utilities/KnownFor.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
	export let person: PersonType;
</script>

<section id="person" class="xl:rounded-2xl mx-auto max-w-7xl xl:pb-20 xl:mt-5">
	<div class=" grid xl:grid-cols-5 xl:grid-rows-auto xl:auto-rows-fr">
		<div
			class="xl:rounded-2xl bg-skin-secondary w-full xl:p-2 xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 mx-auto"
		>
			{#if person.profile_path}
				<img
					class="mt-4 xl:mt-0 xl:pt-0 w-64 h-96 rounded-2xl mx-auto"
					src={IMAGE_API + person.profile_path}
					alt="profile"
				/>
			{:else}
				<img
					class="mt-4 xl:pt-0 flex justify-end w-64 h-96 rounded-2xl mx-auto"
					src="/person.svg"
					alt="profile"
				/>
			{/if}
			<h4 class="mt-2 w-full text-skin-base text-center mx-auto xl:hidden">{person.name}</h4>
			<div class="text-skin-base pl-8 w-full xl:p-3">
				<h4 class="xl:text-2xl mt-2">Personal Info</h4>
				<h6 class="xl:text-lg font-bold mt-4 mb-1">Known For</h6>
				<p class="text-skin-muted xl:text-base">{person.known_for_department}</p>
				<h6 class="xl:text-lg font-bold mt-4 mb-1">Gender</h6>
				{#if person.gender === 2}
					<p class="text-skin-muted xl:text-base">Male</p>
				{:else}
					<p class="text-skin-muted xl:text-base">Female</p>
				{/if}
				<h6 class="xl:text-lg font-bold mt-4 mb-1">Birthdate</h6>
				{#if person.birthday}
					<p class="text-skin-muted xl:text-base">{person.birthday}</p>
				{:else}
					<p class="text-skin-muted xl:text-base">Unknown</p>
				{/if}
				<h6 class="xl:text-lg font-bold mt-4 mb-1">Place of Birth</h6>
				{#if person.place_of_birth}
					<p class="text-skin-muted xl:text-base">{person.place_of_birth}</p>
				{:else}
					<p class="text-skin-muted xl:text-base">Unknown</p>
				{/if}
				{#if person.also_known_as && person.also_known_as.length}
					<h4 class="mt-4 mb-1">Also Known As</h4>
					{#each person.also_known_as as alias}
						<p class="text-skin-muted xl:text-base">{alias}</p>
					{/each}
				{/if}
			</div>
		</div>

		<div
			class="bg-skin-tertiary xl:rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-1 xl:row-end-2 xl:ml-5 xl:mb-5"
		>
			<div class="mb-2 xl:mb-4 relative bg-primary xl:ml-5 p-3.5 rounded-2xl">
				<h4 class="xl:text-2xl hidden xl:inline-block">{person.name}</h4>
				<h6 class="xl:text-lg font-bold mt-4 mb-1">Biography</h6>
				<p class="text-skin-muted xl:text-base">{person.biography}</p>
			</div>
		</div>
		<div
			class="bg-skin-tertiary rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-2 xl:row-end-3 xl:bg-primary xl:ml-5 xl:p-3.5"
		>
			<div class="pt-8">
				<h4 class="xl:text-2xl pl-3.5 xl:pl-0">Known For</h4>
				<KnownFor personId={person.id} />
			</div>
		</div>
	</div>
</section>
