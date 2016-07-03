import * as React from "react";

import ControlBankContainer from "./control-bank-container";
import MuteBankContainer from "./mute-bank-container";
import FaderBankContainer from "./fader-bank-container";
import ControlBarContainer from "./control-bar-container";

const Manual = (props) => {
  const { index } = props,
        style = {
          display: "table",
          width: "100%"
        },
        rowStyle = {
          display: "table-row"
        },
        faderCellStyle = {
          display: "table-cell",
          height: 200
        },
        cellStyle = {
          display: "table-cell"
        };

  return (
    <div style={style}>
      <div style={rowStyle}>
        <div style={faderCellStyle}>
          <FaderBankContainer index={index} />
        </div>
        <div style={faderCellStyle}>
          <ControlBankContainer index={index} />
        </div>
        <div style={faderCellStyle}>
          <ControlBarContainer index={index} />
        </div>
      </div>
      <div style={rowStyle}>
        <div style={cellStyle}>
          <MuteBankContainer index={index} />
        </div>
      </div>
    </div>
  );
};

export default Manual;
