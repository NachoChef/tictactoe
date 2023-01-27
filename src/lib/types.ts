export interface GameHistory {
	totalGames: number;
	wins: number;
}

export class GameHistoryImpl implements GameHistory {
	totalGames: number;
	wins: number;

	constructor() {
		this.totalGames = 0;
		this.wins = 0;
	}

	// update function
	addGame(won: boolean): GameHistoryImpl {
		this.totalGames += 1;
		if (won) {
			this.wins += 1;
		}

		return this;
	}
}

export interface GameState {
	gridState: number[][];
}

export interface Play {
	location: Coords;
	player: number;
}

export interface Coords {
	x: number;
	y: number;
}
