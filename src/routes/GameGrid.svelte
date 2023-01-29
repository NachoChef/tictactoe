<script lang="ts">
	import { checkForWin, cpuTurn } from '$lib/cpu';
	import { gameHistory } from '$lib/stores';
	import Cell from './Cell.svelte';

	export let state: string[] = Array(9).fill('');
	export let playerTurn: boolean;
	let isOver: boolean = false;
	let usedCells = 0;
	let winningLetter = '';

	export function reset() {
		state = Array(9).fill('');
		usedCells = 0;
		winningLetter = '';
		playerTurn = true;

		if (!isOver) {
			console.log('forfeit detected');

			gameHistory.update((gh) => {
				gh.totalGames += 1;
				gh.cpuWins += 1;

				return gh;
			});
		}

		isOver = false;
	}

	function handleClick(i: number) {
		if (playerTurn && !isOver) {
			state[i] = 'x';
			usedCells += 1;

			if (usedCells == 9) {
				isOver = true;
			}

			let testOutcome = winTest();
			if (!testOutcome && !isOver) {
				playerTurn = false;
				let played = cpuTurn(state);
				if (played) {
					usedCells += 1;
				}
				if (usedCells == 9) {
					isOver = true;
				}
				testOutcome = winTest();
				if (!testOutcome) {
					playerTurn = true;
				}
			}
		}
	}

	function winTest(): boolean {
		let winner = checkForWin(state);
		if (winner != '') {
			isOver = true;
			winningLetter = winner;
			console.log('winner', winner);
		}
		return isOver;
	}

	$: if (isOver) {
		gameHistory.update((gh) => {
			gh.totalGames += 1;

			if (winningLetter == 'x') {
				gh.wins += 1;
			} else if (winningLetter == 'o') {
				gh.cpuWins += 1;
			}
			return gh;
		});
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
