<script>
	import { gameHistory } from '$lib/stores';
	import LabeledValue from './LabeledValue.svelte';
</script>

<LabeledValue label="X (You)" value={$gameHistory.wins} style="--color: lightblue;" />
<LabeledValue label="Games" value={$gameHistory.totalGames} style="--color: grey;" />
<LabeledValue
	label="O (CPU)"
	value={$gameHistory.totalGames - $gameHistory.wins}
	style="--color: yellow;"
/>

<style>
	.score-wrapper {
	}
</style>
