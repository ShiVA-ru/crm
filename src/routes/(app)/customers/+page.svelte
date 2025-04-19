<script lang="ts">
	import Customer from '$lib/components/customers/Customer.svelte';

	const customers = [
		{ id: 1, name: 'Связьтранснефть', slug: 'stn' },
		{ id: 2, name: 'Транснефть Сибирь', slug: 'tnsb' },
		{ id: 3, name: 'Гимназия Салманова', slug: 'gimnazia-salmanova' },
		{ id: 4, name: 'Другие', slug: 'another' }
	];
</script>

<h2 class="page-heading">Заказчики</h2>

<ul class="customers">
	{#each customers as customer (customer.id)}
		<li class="customers__item">
			<Customer {customer} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	.customers {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20px;
	}

	.customers__item {
		flex: 1 1 300px;
	}

	.page-heading {
		margin-top: 20px;
		text-align: center;
		/* font-size: 24px; */
		/* font-weight: 700; */
	}
</style>
