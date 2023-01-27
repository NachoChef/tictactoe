import { GameHistoryImpl } from './types';
import { writable } from 'svelte/store';

export const gameHistory = writable(new GameHistoryImpl());
