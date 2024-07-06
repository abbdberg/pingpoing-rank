import { Autocomplete, Grid, Button, ButtonGroup, TextField, Typography, Paper, Chip } from "@mui/material";
import { Player } from "../../models/Player";
import { useDispatch } from "react-redux";
import { PlayerState, updatePlayerScore } from "../../store/playersSlice";

const fakePlaysers = "GracefulAdvance, HarmonicGrace, VibrantFashion, ScoutSmart, SmokyBlast, EyedManiacal, MutantElectric, SneakyVagabond, SkillWeaver, SniperNest, MurderousSquirrel, MoonYodeler, EmotiveDeer, ThumperHare, HooliganFlood, AimHawk, MysteriousLure, HardNut, ThrillingUndead, MysterySleuth";

export interface PlayerProps extends Player {
  updatePlayerName: (name: string) => void;
}
export const PlayerCmp = (props: PlayerProps) => 
{
  const dispatch = useDispatch();
  // Example function to handle a change
  const handleSliderChange = (newValue:number) => {
    dispatch(updatePlayerScore({ name: props.name, points: newValue }));
  };

  let backgroundColor = 'rgba(255,255,255, 0.7)';
  if(props.state === PlayerState.WINNER) {
    backgroundColor = 'rgba(76,175,80, 0.7)';
  } else if(props.state === PlayerState.LOSER) {
    backgroundColor = 'rgba(244,67,54, 0.7)';
  }
return <div>
<Grid spacing={2} container alignItems={"center"} justifyContent={'center'} >
<Paper elevation={5} className="player-card" style={{backgroundColor}}>
<Grid item xs={12}>
  {props.state === PlayerState.WINNER && <Chip label={"🏆"} />}
  {props.state === PlayerState.LOSER && <Chip label={"😔"} />}
  {props.state === PlayerState.NOT_FINISHED && <Chip label={"⏳"} />}

  {/* <Typography variant="button" justifyItems={"center"} flex={1}>
    { "🏆 Player 1"}
  </Typography> */}
</Grid>
<Grid item xs={12}>
  <Autocomplete 
  freeSolo
  options={fakePlaysers.split(',').map((option) => option.trim())} 
  value={props.name} 
  onChange={(_, value) => {
    console.log(value);
    props.updatePlayerName(value as string)
  }} 
  fullWidth
  renderInput={(params) => <TextField {...params} label="Name" />}
  />
</Grid>
<Grid item xs={12}>
  <Typography variant="h1">{props.points}</Typography>
</Grid>
<Grid item xs={12}>
<ButtonGroup variant="contained" color="primary" fullWidth size="large">
      <Button size="large" onClick={() => handleSliderChange(11)}>11</Button>
      <Button onClick={() => handleSliderChange(0)}>0</Button>
      <Button onClick={() => handleSliderChange(props.points-1)}>-1</Button>
      <Button onClick={() => handleSliderChange(props.points+1)}>+1</Button>
    </ButtonGroup>
</Grid>
</Paper>
</Grid>
</div>
}