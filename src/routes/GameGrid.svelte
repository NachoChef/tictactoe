<script lang="ts">
	import Cell from './Cell.svelte';

	export let state: string[][] = Array.from(Array(3), () => Array(3).fill(''));

	function handleClick(x: number, y: number) {
		state[x][y] = 'X';
	}
</script>

<div class="grid-wrapper">
	{#each state as row, i}
		{#each row as item, j}
			<Cell on:click={() => handleClick(i, j)} value={item} />
		{/each}
	{/each}
</div>

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: 90px 90px 90px;
		grid-template-rows: 90px 90px 90px;
	}
</style>
