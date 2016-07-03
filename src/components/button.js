import * as React from "react";

const DEFAULT_SIZE = 24;

const Button = (props) => {
  const {
          label1,
          size,
          onChange
        } = props,
        polarity = (props.polarity || false),
        active = (props.active || false),
        lighted = polarity !== active, // xor
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
        color = lighted ? activeColor : inactiveColor,
        buttonStyle = {
          backgroundColor: color,
          border: `1px solid ${color}`,
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

export default Button;
