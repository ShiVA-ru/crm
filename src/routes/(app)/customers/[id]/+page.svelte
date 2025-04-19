<script lang="ts">
	import Division from '$lib/components/divisions/Division.svelte';

	const divisions = [
		{ id: 1, name: 'Объекты Тюмени', slug: 'tmn-city' },
		{ id: 2, name: 'Тюменский УМН', slug: 'tmn' },
		{ id: 3, name: 'Сургутский УМН', slug: 'sur' },
		{ id: 4, name: 'Нефтеюганский УМН', slug: 'nft' }
	];
</script>

<h2 class="page-heading">Транснефть Сибирь</h2>

<ul class="divisions">
	{#each divisions as division (division.id)}
		<li class="divisions__item">
			<Division {division} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	.divisions {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20px;

		&__item {
			flex: 1 1 300px;
		}
	}

	.page-heading {
		margin-top: 20px;
		text-align: center;
		/* font-size: 24px; */
		/* font-weight: 700; */
	}
</style>
