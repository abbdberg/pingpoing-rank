import { Autocomplete, Grid, Slider, TextField, Typography } from "@mui/material";
import { Player } from "../../models/Player";
import { useDispatch } from "react-redux";
import { updatePlayerScore } from "../../store/playersSlice";

export interface PlayerProps extends Player {
  isWinner: boolean;
  updatePlayerName: (name: string) => void;
}
export const PlayerCmp = (props: PlayerProps) => 
{
  const dispatch = useDispatch();
  // Example function to handle a change
  const handleSliderChange = (event, newValue) => {
    dispatch(updatePlayerScore({ name: props.name, points: newValue }));
  };
return <>
<Grid spacing={2} container alignItems={"center"} >
<Grid item xs={12}>
  <Typography variant="h2" justifyItems={"center"} flex={1}>
    {props.isWinner ? "🏆 Winner" : "😞 Looser"}
  </Typography>
</Grid>
<Grid item xs={12}>
  <Autocomplete 
  freeSolo
  options={['Player 1', 'Player X']} 
  value={props.name} 
  onChange={(evt, value) => {
    console.log(value);
    props.updatePlayerName(value as string)
  }} 
  fullWidth
  renderInput={(params) => <TextField {...params} label="Name" />}
  />
</Grid>
<Grid item xs={12}>
  <TextField label="Points" value={props.points} type="number" fullWidth />
</Grid>
<Grid item xs={12}>
  <Slider value={props.points} max={30} defaultValue={11} valueLabelDisplay="auto" onChange={handleSliderChange} />
</Grid>
</Grid>
</>
}