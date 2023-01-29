<script lang="ts">
	import AlphaX from 'svelte-material-icons/AlphaX.svelte';
	import AlphaO from 'svelte-material-icons/AlphaO.svelte';
	export let value: String;
	export let disabled: boolean = false;
</script>

<div class="cell" on:click class:disabled>
	{#if value == 'x'}
		<AlphaX size="2em" />
	{:else if value == 'o'}
		<AlphaO size="2em" />
	{:else}{/if}
</div>

<style>
	.cell {
		width: 80px;
		height: 80px;
		border-radius: 3px;
		background: rgb(50, 40, 109);
		box-shadow: 5px 5px 1px rgb(34, 27, 75);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		color: lightgrey;
	}

	.disabled {
		opacity: 50%;
	}
</style>
