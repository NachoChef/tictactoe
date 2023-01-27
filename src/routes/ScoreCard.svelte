<script>
	import { gameHistory } from '$lib/stores';
	import LabeledValue from './LabeledValue.svelte';
</script>

<div class="score-wrapper">
	<LabeledValue label="X (You)" value={$gameHistory.wins} style="--color: rgba(0,199,191,255);" />
	<LabeledValue
		label="Games"
		value={$gameHistory.totalGames}
		style="--color: rgba(163,191,202,255);"
	/>
	<LabeledValue
		label="O (CPU)"
		value={$gameHistory.totalGames - $gameHistory.wins}
		style="--color: rgba(252,176,0,255);"
	/>
</div>

<style>
	.score-wrapper {
		display: flex;
		padding-top: 10px;
		justify-content: space-evenly;
		width: 250px;
	}
</style>
