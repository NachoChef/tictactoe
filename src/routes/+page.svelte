<script>
	import Controls from './Controls.svelte';
	import GameGrid from './GameGrid.svelte';
	import ScoreCard from './ScoreCard.svelte';

	let playerTurn = true;

	/**
	 * @type {() => void}
	 */
	let reset;
	function resetGame() {
		reset();
	}
</script>

<div class="page-wrapper">
	<Controls {playerTurn} on:reset={() => resetGame()} />
	<GameGrid bind:playerTurn bind:reset />
	<ScoreCard />
</div>

<style>
	:global(body) {
		background: rgb(70, 56, 150);
		font-family: 'Open Sans', sans serif;
	}

	.page-wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
