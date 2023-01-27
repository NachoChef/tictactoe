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
		height: 40px;
		width: 60px;
		border-radius: 4px;
	}

	.label {
		font-size: small;
	}
</style>
