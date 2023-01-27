<script lang="ts">
	export let label: string;
	export let value: number;
	export let style: string = '';
</script>

<span class="display" {style}>
	<div class="label">
		{label}
	</div>
	<div class="value">
		{value}
	</div>
</span>

<style>
	.display {
		background-color: var(--color);
		height: 35px;
		width: 70px;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-shadow: 3px 3px 1px rgb(34, 27, 75);
	}

	.label {
		font-size: small;
	}
</style>
