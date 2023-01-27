<script lang="ts">
	import AlphaO from 'svelte-material-icons/AlphaO.svelte';
	import AlphaX from 'svelte-material-icons/AlphaX.svelte';
	import Refresh from 'svelte-material-icons/Refresh.svelte';

	export let playerTurn: boolean;
</script>

<div class="control-wrapper">
	<span class="letters"
		><AlphaX size="2em" color="rgba(0,199,191,255)" />
		<AlphaO size="2em" color="rgba(252,176,0,255)" /></span
	>
	<span class="turn">
		{#if playerTurn}
			<AlphaX size="2em" color="rgba(163,191,202,255)" />
		{:else}
			<AlphaO size="2em" color="rgba(163,191,202,255)" />
		{/if} TURN
	</span>
	<button class="btn restart"> <Refresh size="1.5em" color="rgba(22,51,63,255)" /> </button>
</div>

<style>
	.control-wrapper {
		width: 250px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 10px;
	}

	.letters {
		width: 70px;
		height: 30px;
		text-align: left;
	}

	.restart {
		background-color: rgba(163, 191, 202, 255);
		width: 25px;
		height: 25px;
		border-radius: 5px;
		box-shadow: 0px 2px 0px rgba(105, 138, 149, 255);
		flex-shrink: 0;
	}

	.turn {
		background-color: rgb(50, 40, 109);
		color: rgba(163, 191, 202, 255);
		border-radius: 5px;
		height: 30px;
		width: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn {
		border: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(svg) {
		flex-shrink: 0;
		overflow: hidden;
	}
</style>
