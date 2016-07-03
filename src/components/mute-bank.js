import * as React from "react";

import StepGroup from "./step-group";

import Button from "./button";

const MuteBank = (props) => {
  const {
          activePosition,
          mutedPositions,
          onMute
        } = props;
  return StepGroup((i) => {
    const active = i === activePosition,
          muted = mutedPositions[i];
    return (
      <div className="indicator-well" style={{ padding: "10px 0", textAlign: "center", width: "100%" }}>
        <Button
          active={!!muted}
          polarity={!active}
          size={12}
          onChange={(value) => { onMute(i, value); }}
        />
      </div>
    );
  });
};

export default MuteBank;
