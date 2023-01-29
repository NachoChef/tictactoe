<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { toast } from './toast';
	export let message = '';
	export let duration = 1000;
	let progress = tweened(100, { duration: duration });
	onMount(async () => {
		await progress.set(0);
		toast.remove();
	});
</script>

<p>
	{message}
</p>

<style>
	p {
		margin: 0;
	}
</style>
