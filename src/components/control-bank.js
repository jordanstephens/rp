import * as React from "react";

import Fader from "./fader";

import {
  MIN_VOLUME,
  MAX_VOLUME,
  MIN_PULSE_WIDTH,
  MAX_PULSE_WIDTH
} from "../constants";

const ControlBank = (props) => {
  let {
        volume,
        pulseWidth,
        onVolumeChange,
        onPulseWidthChange
      } = props,
      style = {
        boxSizing: "border-box",
        height: "100%",
        padding: "0 0 0 40px",
        margin: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "row"
      },
      liStyle = {
        width: "50%"
      };
  return (
    <ol style={style}>
      <li style={liStyle}>
        <Fader
          label={"pulse"}
          value={pulseWidth}
          min={MIN_PULSE_WIDTH}
          max={MAX_PULSE_WIDTH}
          onChange={(value) => { onPulseWidthChange(value); }}
        />
      </li>
      <li style={liStyle}>
        <Fader
          label={"volume"}
          value={volume}
          min={MIN_VOLUME}
          max={MAX_VOLUME}
          onChange={(value) => { onVolumeChange(value); }}
        />
      </li>
    </ol>
  );
};

export default ControlBank;
