
import { PlayerCmp } from "./PlayerCmp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PlayerNumber, PlayerState, updatePlayerName } from "../../store/playersSlice";
import { Button } from "primereact/button";

export const Match = () => {

  const { player1, player2 } = useSelector((state: RootState) => state.players);
  const dispatch = useDispatch();

  return <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
    <PlayerCmp {...player1} updatePlayerName={(name: string) => {
      dispatch(updatePlayerName({ playerNumber: PlayerNumber.PLAYER1, name }));
    }} />
  <h1 className="score">{String(player1.points).padStart(2, '0')} : {String(player2.points).padStart(2, '0')}</h1>
    <PlayerCmp {...player2} updatePlayerName={(name: string) => {
      dispatch(updatePlayerName({ playerNumber: PlayerNumber.PLAYER2, name }));
    }} />
    <Button disabled={player1.state === PlayerState.NOT_FINISHED} rounded>Register match</Button>
  </div>
}