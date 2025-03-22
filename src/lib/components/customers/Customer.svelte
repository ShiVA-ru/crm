<script lang="ts">
	const { customer } = $props();
</script>

<div class="customer">
	<a href="/customers/{customer.slug}" class="customer__link">{customer.name}</a>
</div>

<style lang="postcss">
	.customer {
		display: flex;

		&__link {
			width: 100%;
			padding: 20px;

			text-align: center;

			border: 1px solid var(--gray);
			border-radius: 10px;
			transition:
				background-color 0.3s ease-in-out,
				color 0.3s ease-in-out,
				box-shadow 0.3s ease-in-out,
				border-color 0.3s ease-in-out;
			&:hover,
			&:focus {
				color: var(--white);
				background-color: var(--primary);
				box-shadow: 4px 4px 8px 0px var(--primary);
				border-color: transparent;
			}
		}
	}
</style>
