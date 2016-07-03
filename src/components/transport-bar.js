import * as React from "react";

import Fader from "./fader";
import Button from "./button";

import {
  MIN_TEMPO,
  MAX_TEMPO
} from "../constants";

const TransportBar = (props) => {
  let {
        tempo,
        pauseMode,
        onTempoChange,
        onPauseModeChange
      } = props,
      style = {
        boxSizing: "border-box",
        height: "100%",
        padding: 0,
        margin: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      };
  return (
    <ol style={style}>
      <li style={{ flex: 1, maxWidth: 300 }}>
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
        <Button
          label1={"Pause"}
          active={!!pauseMode}
          onChange={(active) => { onPauseModeChange(active); }}
        />
      </li>
    </ol>
  );
};

export default TransportBar;
