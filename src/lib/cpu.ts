export function cpuTurn(gameState: string[]): boolean {
	let chosenIndex = randomIndex();
	let guesses = 0;
	while (gameState[chosenIndex] != '' && guesses < 9) {
		chosenIndex = randomIndex();
		guesses += 1;
	}
	if (guesses != 9) {
		gameState[chosenIndex] = 'o';
		return true;
	} else {
		console.log('guessing timed out');
		return false;
	}
}

export function checkForWin(gameState: string[]): string {
	if (gameState[0] == gameState[1] && gameState[1] == gameState[2]) {
		return gameState[0];
	} else if (gameState[3] == gameState[4] && gameState[4] == gameState[5]) {
		return gameState[3];
	} else if (gameState[6] == gameState[7] && gameState[7] == gameState[8]) {
		return gameState[6];
	} else if (gameState[0] == gameState[3] && gameState[3] == gameState[6]) {
		return gameState[0];
	} else if (gameState[1] == gameState[4] && gameState[4] == gameState[7]) {
		return gameState[1];
	} else if (gameState[2] == gameState[5] && gameState[5] == gameState[8]) {
		return gameState[2];
	} else if (gameState[0] == gameState[4] && gameState[4] == gameState[8]) {
		return gameState[0];
	} else if (gameState[2] == gameState[4] && gameState[4] == gameState[6]) {
		return gameState[2];
	}
	return '';
}

// win states:
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8

// 0, 3, 6
// 1, 4, 7
// 2, 5, 8

// 0, 4, 8
// 2, 4, 6

function randomIndex(): number {
	return Math.floor(Math.random() * 9);
}
