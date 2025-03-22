<script lang="ts">
	import '$lib/assets/css/app.css';
	import Footer from '$lib/components/general/Footer.svelte';
	import Header from '$lib/components/general/Header.svelte';
	let { children } = $props();

	// isOpened.subscribe((val) => (isOpenedValue = val));

	// function authClick() {
	// 	if ($isAuth) {
	// 		goto('/profile');
	// 	} else {
	// 		isOpenedModal = true;
	// 	}
	// }
</script>

<div class="page-wrapper">
	<Header />
	<main class="page-main">
		<div class="container m-auto">
			<h1 class="visually-hidden">CRM система компании "ОстМастер"</h1>
			{@render children()}
		</div>
	</main>
	<Footer />
</div>

<style lang="postcss">
	.page-wrapper {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		height: 100vh;
		height: 100dvh;
		width: 100%;

		background-color: var(--white);
	}
</style>
