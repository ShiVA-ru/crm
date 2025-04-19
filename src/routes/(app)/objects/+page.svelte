<script lang="ts">
	import Object from '$lib/components/objects/Object.svelte';

	const objects = [
		{ id: 1, name: 'ТРМЗ', slug: 'tmn-city' },
		{ id: 2, name: 'Республикиб 209а', slug: 'tmn' },
		{ id: 2, name: 'Республики', slug: 'tmn' },
		{ id: 2, name: 'Республики', slug: 'tmn' },
		{ id: 2, name: 'Республики', slug: 'tmn' },
		{ id: 2, name: 'Республики', slug: 'tmn' },
		{ id: 2, name: 'Республики', slug: 'tmn' },
		{ id: 2, name: 'Республики', slug: 'tmn' }
	];
</script>

<h2 class="page-heading">Подразделения</h2>

<ul class="objects">
	{#each objects as object (object.id)}
		<li class="objects__item">
			<Object {object} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	.objects {
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
