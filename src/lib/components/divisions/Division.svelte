<script lang="ts">
	const { division } = $props();
</script>

<div class="division">
	<a href="/customers/tmn/{division.slug}" class="division__link">{division.name}</a>
</div>

<style lang="postcss">
	.division {
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
