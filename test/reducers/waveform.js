import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setWaveform } from "../../src/actions";
import waveform from "../../src/reducers";

describe("waveform reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = waveform(undefined, action);
    expect(result.waveform).toEqual(initialState.waveform);
  });

  it("should handle SET_WAVEFORM", () => {
    const value = "sawtooth",
          index = 1,
          action = setWaveform(index, value),
          result = waveform({}, action);
    expect(result.waveform[index]).toEqual(value);
  });
});
