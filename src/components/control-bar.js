import * as React from "react";

import Button from "./button";

import { WAVEFORMS } from "../constants";

const WAVEFORMS_COUNT = WAVEFORMS.length;

const handleWaveformChange = (currentWaveform, onChange) => {
  const currentWaveformIndex = WAVEFORMS.indexOf(currentWaveform),
        nextWaveformIndex = (currentWaveformIndex + 1) % WAVEFORMS_COUNT,
        nextWaveform = WAVEFORMS[nextWaveformIndex];
  onChange(nextWaveform);
};

const ControlBar = (props) => {
  let {
        waveform,
        randomMode,
        reverseMode,
        onWaveformChange,
        onRandomModeChange,
        onReverseModeChange
      } = props,
      waveformLabel = (
        <svg viewBox="0 0 32 32" style={{ width: 24, height: 24 }}>
          <use xlinkHref={`#${waveform}`}></use>
        </svg>
      ),
      style = {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column"
      };
  return (
    <ol style={style}>
      <li>
        <Button
          label1={"Random"}
          active={!!randomMode}
          onChange={(active) => onRandomModeChange(active) }
        />
      </li>
      <li>
        <Button
          label1={"Reverse"}
          active={!!reverseMode}
          onChange={(active) => onReverseModeChange(active) }
        />
      </li>
      <li>
        <Button
          label1={waveformLabel}
          onChange={() => handleWaveformChange(waveform, onWaveformChange) }
        />
      </li>
    </ol>
  );
};

export default ControlBar;
