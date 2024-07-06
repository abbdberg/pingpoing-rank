import { PlayerState } from "../store/playersSlice";

export interface Player {
  name: string;
  points: number;
  state: PlayerState;
}