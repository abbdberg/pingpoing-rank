import {  Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { PlayerCmp } from "./PlayerCmp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PlayerNumber, updatePlayerName } from "../../store/playersSlice";

export const Match = () => {

  const { player1, player2 } = useSelector((state: RootState) => state.players);
  const dispatch = useDispatch();

  return <Grid container rowGap={2} alignContent={'center'} justifyContent={'center'}>
      <Grid xs={12} item justifyContent={'center'}>
        <PlayerCmp {...player1} updatePlayerName={(name: string) => {
          dispatch(updatePlayerName({ playerNumber: PlayerNumber.PLAYER1, name }));
        }} />
      </Grid>
      <Grid xs={12} item justifyContent={'center'}>
        <Divider flexItem orientation="horizontal" />
      </Grid>
      <Grid xs={12} item>
        <PlayerCmp {...player2} updatePlayerName={(name: string) => {
          dispatch(updatePlayerName({ playerNumber: PlayerNumber.PLAYER2, name }));
        }} />
      </Grid>
    <Grid xs={12} item>
      <Button variant="outlined">Register match</Button>
      <Button variant="outlined">Switch winner 🔀</Button>
    </Grid>
  </Grid>
}