<script lang="ts">
	import Cell from './Cell.svelte';

	export let state: string[] = Array(9).fill('');
	export let playerTurn: boolean;

	function handleClick(i: number) {
		if (playerTurn) {
			state[i] = 'x';
			playerTurn = false;
		}
	}
</script>

<div class="grid-wrapper">
	{#each state as cell, i}
		<Cell on:click={() => handleClick(i)} value={cell} />
	{/each}
</div>

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: 90px 90px 90px;
		grid-template-rows: 90px 90px 90px;
	}
</style>
