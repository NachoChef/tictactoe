<script lang="ts">
	import Cell from './Cell.svelte';

	export let state: string[][] = Array.from(Array(3), () => Array(3).fill(''));
</script>

<div class="grid-wrapper">
	{#each state as row}
		{#each row as item}
			<Cell value={item} />
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
