import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setVolume } from "../../src/actions";
import volume from "../../src/reducers";

describe("volume reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = volume(undefined, action);
    expect(result.volume).toEqual(initialState.volume);
  });

  it("should handle SET_VOLUME", () => {
    const value = 0.8,
          index = 1,
          action = setVolume(index, value),
          result = volume({}, action);
    expect(result.volume[index]).toEqual(value);
  });
});
