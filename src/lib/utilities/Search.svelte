<script lang="ts">
	import { goto } from '$app/navigation';

	let searchTerm: string;
	const handleOnSubmit = () => {
		if (searchTerm) {
			let searching = searchTerm;
			searchTerm = '';
			goto(`/search/${searching}`);
		}
	};
</script>

<section id="search">
	<form
		class="flex justify-end items-center pr-0.5"
		label="search form"
		on:submit|preventDefault={handleOnSubmit}
	>
		<input
			label="search"
			class="placeholder-gray-500 bg-transparent w-24 xl:w-48 h-7 rounded-full text-l px-2 text-skin-muted placeholder-text-skin-base::placeholder border-2 border-skin-border"
			type="text"
			placeholder="Search..."
			bind:value={searchTerm}
		/>
	</form>
</section>
