<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Modal from '$lib/Modal.svelte';
	import Controls from './Controls.svelte';
	import GameGrid from './GameGrid.svelte';
	import Instructions from './Instructions.svelte';
	import ScoreCard from './ScoreCard.svelte';

	let isModalOpen = true;
	let playerTurn = true;

	/**
	 * @type {() => void}
	 */
	let reset;
	function resetGame() {
		reset();
	}
</script>

<Header />

<div class="page-wrapper">
	<Controls {playerTurn} on:reset={() => resetGame()} />
	<GameGrid bind:playerTurn bind:reset />
	<ScoreCard />
</div>

<Footer />

<Modal bind:isModalOpen background={true}>
	<Instructions />
</Modal>

<style>
	:global(body) {
		background: rgb(70, 56, 150);
		font-family: 'Open Sans', sans serif;
	}

	.page-wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding-top: 50px;
	}
</style>
