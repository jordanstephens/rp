import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setReverseMode } from "../../src/actions";
import reverseMode from "../../src/reducers";

describe("reverseMode reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = reverseMode(undefined, action);
    expect(result.reverseMode).toEqual(initialState.reverseMode);
  });

  it("should handle SET_REVERSE_MODE", () => {
    const value = true,
          index = 1,
          action = setReverseMode(index, value),
          result = reverseMode({}, action);
    expect(result.reverseMode[index]).toEqual(value);
  });
});
