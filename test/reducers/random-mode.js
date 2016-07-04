import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setRandomMode } from "../../src/actions";
import randomMode from "../../src/reducers";

describe("randomMode reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = randomMode(undefined, action);
    expect(result.randomMode).toEqual(initialState.randomMode);
  });

  it("should handle SET_RANDOM_MODE", () => {
    const value = "sawtooth",
          index = 1,
          action = setRandomMode(index, value),
          result = randomMode({}, action);
    expect(result.randomMode[index]).toEqual(value);
  });
});
