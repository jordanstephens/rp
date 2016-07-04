import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setPulseWidth } from "../../src/actions";
import pulseWidth from "../../src/reducers";

describe("pulseWidth reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = pulseWidth(undefined, action);
    expect(result.pulseWidth).toEqual(initialState.pulseWidth);
  });

  it("should handle SET_PULSE_WIDTH", () => {
    const value = 0.7,
          index = 1,
          action = setPulseWidth(index, value),
          result = pulseWidth({}, action);
    expect(result.pulseWidth[index]).toEqual(value);
  });
});
