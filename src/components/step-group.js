import * as React from "react";

import { STEP_COUNT } from "../constants";
import { loop } from "../util";

// ex: 4 => "25%"
const flexBasis = (count) => {
  return `${100 / count}%`;
};

const StepGroup = (childFn) => {
  const count = STEP_COUNT,
        portion = flexBasis(count),
        style = {
          padding: 0,
          margin: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          height: "100%"
        },
        liStyle = {
           flexBasis: portion,
           width: portion,
           display: "flex",
           flexDirection: "column"
        };
  return (
    <ol style={style}>
      {loop(count, (i) => {
        return (
          <li key={i} style={liStyle}>
            <div style={{ flex: 1, width: "100%" }}>
              {childFn(i)}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default StepGroup;
