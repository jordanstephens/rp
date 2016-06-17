import * as React from "react";

import Fader from "./fader";
import ToggleButton from "./toggle-button";

import {
  MIN_TEMPO,
  MAX_TEMPO
} from "../constants";

const GlobalTransportBar = (props) => {
  let {
        tempo,
        pauseMode,
        onTempoChange,
        onPauseModeChange
      } = props,
      style = {
        boxSizing: "border-box",
        height: "100%",
        padding: "0 0 0 40px",
        margin: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "row"
      };
  return (
    <ol style={style}>
      <li style={{ flex: 1 }}>
        <Fader
          orientation="horizontal"
          label={"bpm"}
          value={tempo}
          min={MIN_TEMPO}
          max={MAX_TEMPO}
          step={1}
          onChange={(value) => { onTempoChange(value); }}
        />
      </li>
      <li>
        <ToggleButton
          label1={"Pause"}
          active={!!pauseMode}
          onChange={(active) => { onPauseModeChange(active); }}
        />
      </li>
    </ol>
  );
};

export default GlobalTransportBar;
