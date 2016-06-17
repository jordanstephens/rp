import * as React from "react";

const DEFAULT_SIZE = 24;

const ToggleButton = (props) => {
  const {
          label1,
          polarity,
          active,
          size,
          onChange
        } = props,
        defaultPolarity = false,
        lighted = (polarity || defaultPolarity) !== active, // xor
        containerStyle = {
          boxSizing: "border-box",
          cursor: "pointer",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          padding: 10,
          height: "100%",
          width: "100%"
        },
        inactiveColor = "#eee",
        activeColor = "hsl(220, 75%, 60%)",
        buttonStyle = {
          backgroundColor: lighted ? activeColor : inactiveColor,
          boxShadow: lighted ? `0 0 5px ${activeColor}` : "none",
          border: "none",
          borderRadius: 3,
          cursor: "pointer",
          display: "block",
          margin: "0 auto",
          outline: "none",
          height: size || DEFAULT_SIZE,
          width: size || DEFAULT_SIZE
        },
        labelStyle = {
          marginTop: "10px"
        };

  return (
    <div
      onClick={() => { onChange(!active); }}
      style={containerStyle}
    >
        <button style={buttonStyle}></button>
        <div style={labelStyle}>{label1}</div>
    </div>
  );
};

export default ToggleButton;
