import * as React from "react";
import Slider from "rc-slider";

const Fader = (props) => {
  const {
          orientation,
          label,
          value,
          min,
          max,
          step,
          onChange
        } = props,
        vertical = orientation !== "horizontal",
        containerStyle = {
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          height: "100%",
          width: "100%"
        },
        sliderWellStyle = {
          boxSizing: "border-box",
          textAlign: "center",
          flexGrow: "1",
          display: "flex",
          alignItems: "stretch",
          padding: 10
        };

  return (
    <div className="fader-container" style={containerStyle}>
      <div className="label-well" style={{ padding: 10 }}>
        <div className="label">{label}</div>
      </div>
      <div className="slider-well" style={sliderWellStyle}>
        <div style={{ margin: "0 auto", flex: "1" }}>
          <Slider
            vertical={vertical}
            included={false}
            value={value}
            min={min || 0}
            max={max || 1}
            step={step || 0.01}
            tipFormatter={null}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Fader;
