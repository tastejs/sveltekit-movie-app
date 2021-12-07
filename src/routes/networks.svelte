<script>
	import { tv_network } from '$lib/stores/store';
</script>

<div class='flex flex-wrap'>
	{#each $tv_network as network}
		<a
			class="bg-secondary justify-center border-border rounded-full border-2 no-underline font-semibold px-1 py-0.5 m-0.5 whitespace-nowrap hover:bg-selected hover:cursor-pointer"
			href={`/network/${network.provider_id}`}
		>
			{network.provider_name}
		</a>
	{/each}
</div>
