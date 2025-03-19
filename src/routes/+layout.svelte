<script lang="ts">
	import '$lib/assets/css/app.css';
	let { children } = $props();

	let isOpenedValue = $state(false);
	// let isOpenedModal: boolean = false;

	function onToggle() {
		console.log('toggle');
		isOpenedValue = !isOpenedValue ? true : false;
		console.log('isOpenedValue', isOpenedValue);
	}
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
	<header class="page-header header">
		<div class="header__wrapper container">
			<a class="header__back" href="/">
				<span class="visually-hidden">Вернуться назад</span>
				<span class="header__back-middle"></span>
			</a>
			<img
				class="header__image"
				src="./images/logo-mini.png"
				alt="Логотип компании ОстМастер"
				width="100"
			/>
			<button class="header__burger" onclick={onToggle} class:header__burger_active={isOpenedValue}>
				<span class="visually-hidden">Бургер меню</span>
				<span class="header__burger-middle"></span>
			</button>
		</div>
	</header>

	<main class="page-main">
		<div class="container m-auto">
			<h1 class="visually-hidden">CRM система компании "ОстМастер"</h1>
			{@render children()}
		</div>
	</main>

	<footer class="page-footer">
		<div class="container m-auto">
			<!-- <img src="./images/logo-mini.png" alt="Логотип компании ОстМастер" width="300" height="60" /> -->
		</div>
	</footer>
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
	.page-header {
		width: 100%;
		padding: 10px;

		background-color: var(--light-grey);
	}

	.header {
		&__wrapper {
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
		}
		&__back {
			width: 60px;
			height: 60px;
			border-radius: 10px;
			/* background: var(--primary); */
			transition: filter 0.3s ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			&-middle {
				width: 40px;
				height: 4px;
				background: #1d1f1e;
				display: block;
				border-radius: 5px;
				transition: transform 0.3s ease-in-out;
			}
			&::before {
				content: '';
				width: 20px;
				height: 4px;
				background: #1d1f1e;
				border-radius: 5px;
				position: absolute;
				bottom: 21px;
				left: 8px;
				transition: transform 0.3s ease-in-out;
				transform: rotate(45deg);
			}
			&::after {
				content: '';
				width: 20px;
				height: 4px;
				background: #1d1f1e;
				border-radius: 5px;
				position: absolute;
				top: 22px;
				left: 8px;
				transition: transform 0.3s ease-in-out;
				transform: rotate(-45deg);
			}

			&:hover {
				cursor: pointer;
				filter: brightness(85%);
			}
		}

		&__burger {
			width: 60px;
			height: 60px;
			border-radius: 10px;
			transition: filter 0.3s ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			&-middle {
				width: 40px;
				height: 4px;
				background: var(--dark);
				display: block;
				border-radius: 5px;
				transition: transform 0.3s ease-in-out;
			}
			&::before {
				content: '';
				width: 40px;
				height: 4px;
				background: var(--dark);
				border-radius: 5px;
				position: absolute;
				bottom: 15px;
				transition: transform 0.3s ease-in-out;
			}
			&::after {
				content: '';
				width: 40px;
				height: 4px;
				background: var(--dark);
				border-radius: 5px;
				position: absolute;
				top: 15px;
				transition: transform 0.3s ease-in-out;
			}

			&:hover {
				cursor: pointer;
				filter: brightness(85%);
			}
		}
	}

	.page-footer {
		min-height: 50px;
		background-color: var(--dark);
	}

	.header__burger_active {
		.header__burger-middle {
			transform: rotateY(90deg);
		}
		&::before {
			transform: translateY(-12px) rotateZ(45deg);
		}
		&::after {
			transform: translateY(12px) rotateZ(-45deg);
		}
	}

	.navbar__burger_active {
		.navbar__burger-middle {
			transform: rotateY(90deg);
		}
		&::before {
			transform: translateY(-12px) rotateZ(45deg);
		}
		&::after {
			transform: translateY(12px) rotateZ(-45deg);
		}
	}
</style>
