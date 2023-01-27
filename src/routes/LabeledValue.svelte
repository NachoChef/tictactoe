<script lang="ts">
	export let label: string;
	export let value: number;
	export let style: string = '';
</script>

<div class="display" {style}>
	<div class="label">
		{label}
	</div>
	<div class="value">
		{value}
	</div>
</div>

<style>
	.display {
		background-color: var(--color);
		height: 35px;
		width: 60px;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.label {
		font-size: small;
	}
</style>
