import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from '../models/Player';

export enum PlayerNumber {
  PLAYER1 = 'player1',
  PLAYER2 = 'player2'
}

export interface PlayerNamePayload {
  playerNumber: PlayerNumber;
  name: string;
}

export interface PlayersState {
  player1: Player;
  player2: Player;
}

const initialState: PlayersState = {
  player1: { name: 'Player 1', points: 11 },
  player2: { name: 'Player 2', points: 11 }
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    updatePlayerScore: (state, action: PayloadAction<Player>) => {
      if (state.player1.name === action.payload.name) {
        state.player1.points = action.payload.points;
      } else if (state.player2.name === action.payload.name) {
        state.player2.points = action.payload.points;
      }
    },
    updatePlayerName: (state, action: PayloadAction<PlayerNamePayload>) => {
      if (action.payload.playerNumber === PlayerNumber.PLAYER1) {
        state.player1.name = action.payload.name;
      } else if (action.payload.playerNumber === PlayerNumber.PLAYER2) {
        state.player2.name = action.payload.name;
      }
    }
    // Add more reducers as needed
  },
});

export const { updatePlayerScore, updatePlayerName } = playersSlice.actions;

export default playersSlice.reducer;