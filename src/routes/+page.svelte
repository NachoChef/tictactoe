<script>
	import GameGrid from './GameGrid.svelte';
	import Score from './Score.svelte';
</script>

<div class="page-wrapper">
	<GameGrid />
	<Score />
</div>

<style>
	:global(body) {
		background: rgb(70, 56, 150);
		font-family: 'Open Sans', sans serif;
	}

	.page-wrapper {
		display: flex;
		justify-content: center;
	}
</style>
