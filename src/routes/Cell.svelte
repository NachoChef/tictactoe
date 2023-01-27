<script lang="ts">
	export let value: String;
</script>

<div class="cell" on:click>
	{value}
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
</style>
