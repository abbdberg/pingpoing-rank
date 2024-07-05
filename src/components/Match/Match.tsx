import {  Button, Divider, Grid } from "@mui/material";
import { PlayerCmp } from "./PlayerCmp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PlayerNumber, updatePlayerName } from "../../store/playersSlice";

export const Match = () => {

  const { player1, player2 } = useSelector((state: RootState) => state.players);
  const dispatch = useDispatch();


  return <Grid container rowGap={2}>
      <Grid xs={12} item>
        <PlayerCmp {...player1} isWinner={true} updatePlayerName={(name: string) => {
          dispatch(updatePlayerName({ playerNumber: PlayerNumber.PLAYER1, name }));
        }} />
      </Grid>
      <Grid xs={12} item>
        <Divider flexItem orientation="horizontal" />
      </Grid>
      <Grid xs={12} item>
        <PlayerCmp {...player2} isWinner={false} updatePlayerName={(name: string) => {
          dispatch(updatePlayerName({ playerNumber: PlayerNumber.PLAYER2, name }));
        }} />
      </Grid>
    <Grid xs={12} item>
      <Button variant="outlined">Register match</Button>
      <Button variant="outlined">Switch winner 🔀</Button>
    </Grid>
  </Grid>
}