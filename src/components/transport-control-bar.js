import * as React from "react";

import ToggleButton from "./toggle-button";

const TransportControlBar = (props) => {
  let {
        randomMode,
        reverseMode,
        onRandomModeChange,
        onReverseModeChange
      } = props,
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
        <ToggleButton
          label1={"Random"}
          active={!!randomMode}
          onChange={(active) => { onRandomModeChange(active); }}
        />
      </li>
      <li>
        <ToggleButton
          label1={"Reverse"}
          active={!!reverseMode}
          onChange={(active) => { onReverseModeChange(active); }}
        />
      </li>
    </ol>
  );
};

export default TransportControlBar;
