import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setPauseMode } from "../../src/actions";
import pauseMode from "../../src/reducers";

describe("pauseMode reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = pauseMode(undefined, action);
    expect(result.pauseMode).toEqual(initialState.pauseMode);
  });

  it("should handle SET_PAUSE_MODE", () => {
    const value = true,
          action = setPauseMode(value),
          result = pauseMode({}, action);
    expect(result.pauseMode).toEqual(value);
  });
});
