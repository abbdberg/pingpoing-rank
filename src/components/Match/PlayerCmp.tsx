import { Player } from "../../models/Player";
import { useDispatch } from "react-redux";
import { PlayerState, updatePlayerScore } from "../../store/playersSlice";

import { Button } from "primereact/button";
import { ButtonGroup } from "primereact/buttongroup";

import { Dropdown } from "primereact/dropdown";

const fakePlaysers = "GracefulAdvance, HarmonicGrace, VibrantFashion, ScoutSmart, SmokyBlast, EyedManiacal, MutantElectric, SneakyVagabond, SkillWeaver, SniperNest, MurderousSquirrel, MoonYodeler, EmotiveDeer, ThumperHare, HooliganFlood, AimHawk, MysteriousLure, HardNut, ThrillingUndead, MysterySleuth";

export interface PlayerProps extends Player {
  updatePlayerName: (name: string) => void;
}
export const PlayerCmp = (props: PlayerProps) => {
  const dispatch = useDispatch();
  // Example function to handle a change
  const handleSliderChange = (newValue: number) => {
    dispatch(updatePlayerScore({ name: props.name, points: newValue }));
  };

  let backgroundColor = 'rgba(255,255,255, 0.5)';
  if (props.state === PlayerState.WINNER) {
    backgroundColor = 'rgba(76,175,80, 0.5)';
  } else if (props.state === PlayerState.LOSER) {
    backgroundColor = 'rgba(244,67,54, 0.5)';
  }
  return <div>
    <div className="player-card" style={{ backgroundColor }}
    >
      <div>
        {props.state === PlayerState.WINNER && <span style={{ margin: 10 }}>{"🏆"} </span>}
        {props.state === PlayerState.LOSER && <span style={{ margin: 10 }}>{"😔"}</span>}
        {props.state === PlayerState.NOT_FINISHED && <span style={{ margin: 10 }}>{"⏳"}</span>}

        <Dropdown
        placeholder="Select a player"
          options={fakePlaysers.split(',').map((option) => option.trim())}
          value={props.name}
          onChange={(e) => {
            props.updatePlayerName(e.value as string)
          }}
        // renderInput={(params) => <TextField {...params} label="Name" />}
        />
      </div>
      <ButtonGroup>
        <Button disabled={!props.name} severity="secondary" rounded onClick={() => handleSliderChange(11)}>11</Button>
        <Button disabled={!props.name} severity="secondary" rounded onClick={() => handleSliderChange(0)}>0</Button>
        <Button disabled={!props.name} severity="secondary" rounded onClick={() => handleSliderChange(props.points - 1)}>-1</Button>
        <Button disabled={!props.name} severity="secondary" rounded onClick={() => handleSliderChange(props.points + 1)}>+1</Button>
      </ButtonGroup>

    </div>
  </div>
}