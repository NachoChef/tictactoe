export interface GameHistory {
	totalGames: number;
	wins: number;
}

export class GameHistoryImpl implements GameHistory {
	totalGames: number;
	wins: number;
	cpuWins: number;

	constructor() {
		this.totalGames = 0;
		this.wins = 0;
		this.cpuWins = 0;
	}
}

export interface GameState {
	gridState: string[];
}
