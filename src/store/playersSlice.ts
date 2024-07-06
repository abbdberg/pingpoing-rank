import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from '../models/Player';

export enum PlayerNumber {
  PLAYER1 = 'player1',
  PLAYER2 = 'player2'
}

export enum PlayerState {
  WINNER = 'winner',
  LOSER = 'loser',
  NOT_FINISHED = 'not_finished'
}

export interface UpdatePlayerPayload extends Omit<Player, 'state'>{}

export interface PlayerNamePayload {
  playerNumber: PlayerNumber;
  name: string;
}

export interface PlayersState {
  player1: Player;
  player2: Player;
}

const initialState: PlayersState = {
  player1: { name: '', points: 11, state: PlayerState.NOT_FINISHED},
  player2: { name: '', points: 11, state: PlayerState.NOT_FINISHED}
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    updatePlayerScore: (state, action: PayloadAction<UpdatePlayerPayload>) => {
      const currentPlayer = state.player1.name === action.payload.name ? state.player1 : state.player2;
      const otherPlayer = state.player1.name === action.payload.name ? state.player2 : state.player1;
      currentPlayer.points = action.payload.points;
      const players = [currentPlayer, otherPlayer].sort((a, b) => b.points - a.points);
      if(players[0].points >= 11 && players[0].points - players[1].points >= 2) {
        players[0].state = PlayerState.WINNER;
        players[1].state = PlayerState.LOSER;
      } else {
        players[0].state = PlayerState.NOT_FINISHED;
        players[1].state = PlayerState.NOT_FINISHED;
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