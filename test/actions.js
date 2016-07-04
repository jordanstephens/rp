import "mocha";
import expect from "expect";
import * as actions from "../src/actions.js";

describe("actions", () => {
  it("should create an action to set pause mode", () => {
    const value = true;
    const expectedAction = {
      type: "SET_PAUSE_MODE",
      value
    };
    expect(actions.setPauseMode(value)).toEqual(expectedAction);
  });

  it("should create an action to set tempo", () => {
    const value = 180;
    const expectedAction = {
      type: "SET_TEMPO",
      value
    };
    expect(actions.setTempo(value)).toEqual(expectedAction);
  });

  it("should create an action to set waveform", () => {
    const index = 1,
          value = "square";
    const expectedAction = {
      type: "SET_WAVEFORM",
      index,
      value
    };
    expect(actions.setWaveform(index, value)).toEqual(expectedAction);
  });

  it("should create an action to set reverse mode", () => {
    const index = 1,
          value = true;
    const expectedAction = {
      type: "SET_REVERSE_MODE",
      index,
      value
    };
    expect(actions.setReverseMode(index, value)).toEqual(expectedAction);
  });

  it("should create an action to set random mode", () => {
    const index = 0,
          value = true;
    const expectedAction = {
      type: "SET_RANDOM_MODE",
      index,
      value
    };
    expect(actions.setRandomMode(index, value)).toEqual(expectedAction);
  });

  it("should create an action to set pulse width", () => {
    const index = 1,
          value = 0.8;
    const expectedAction = {
      type: "SET_PULSE_WIDTH",
      index,
      value
    };
    expect(actions.setPulseWidth(index, value)).toEqual(expectedAction);
  });

  it("should create an action to set volume", () => {
    const index = 1,
          value = 0.4;
    const expectedAction = {
      type: "SET_VOLUME",
      index,
      value
    };
    expect(actions.setVolume(index, value)).toEqual(expectedAction);
  });

  it("should create an action to set active position", () => {
    const index = 1,
          value = 3;
    const expectedAction = {
      type: "SET_ACTIVE_POSITION",
      index,
      value
    };
    expect(actions.setActivePosition(index, value)).toEqual(expectedAction);
  });

  it("should create an action to set a position value", () => {
    const index = 1,
          position = 2,
          value = 0.4;
    const expectedAction = {
      type: "SET_POSITION_VALUE",
      index,
      position,
      value
    };
    expect(actions.setPositionValue(index, position, value)).toEqual(expectedAction);
  });

  it("should create an action to set muted position", () => {
    const index = 1,
          position = 5,
          value = true;
    const expectedAction = {
      type: "SET_POSITION_MUTE",
      index,
      position,
      value
    };
    expect(actions.setPositionMute(index, position, value)).toEqual(expectedAction);
  });
});
