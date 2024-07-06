
import { PlayerCmp } from "./PlayerCmp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PlayerNumber, updatePlayerName } from "../../store/playersSlice";
import { Button } from "primereact/button";

export const Match = () => {

  const { player1, player2 } = useSelector((state: RootState) => state.players);
  const dispatch = useDispatch();

  return <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
    <PlayerCmp {...player1} updatePlayerName={(name: string) => {
      dispatch(updatePlayerName({ playerNumber: PlayerNumber.PLAYER1, name }));
    }} />

    <PlayerCmp {...player2} updatePlayerName={(name: string) => {
      dispatch(updatePlayerName({ playerNumber: PlayerNumber.PLAYER2, name }));
    }} />
    <Button rounded>Register match</Button>
  </div>
}