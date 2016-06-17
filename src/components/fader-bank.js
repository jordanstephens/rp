import * as React from "react";

import StepGroup from "./step-group";
import Fader from "./fader";

const FaderBank = (props) => {
  const {
          positionValues,
          onChange
        } = props;
  return StepGroup((i) => (
    <Fader
      index={i}
      label={i + 1}
      value={positionValues[i]}
      onChange={(value) => { onChange(i, value); }}
    />
  ));
};

export default FaderBank;
