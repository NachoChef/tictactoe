<script>
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Portal from '$lib/Portal.svelte';
	import { toast } from './toast';
	import ToastMessage from './ToastMessage.svelte';
	export let duration = 3000;
</script>

<Portal>
	<div class="toast-wrapper">
		{#each $toast as message (message)}
			<div
				on:click={toast.remove}
				animate:flip
				in:fly={{ opacity: 0, x: 100 }}
				out:fade
				class="toast"
			>
				<ToastMessage {message} {duration} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}
	.toast {
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		background: rgb(50, 40, 109);
		box-shadow: 5px 5px 1px rgb(34, 27, 75);
		opacity: 80%;
		color: lightgray;
	}
</style>
