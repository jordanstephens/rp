import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setPositionMute } from "../../src/actions";
import mutedPositions from "../../src/reducers";

describe("mutedPositions reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = mutedPositions(undefined, action);
    expect(result.mutedPositions).toEqual(initialState.mutedPositions);
  });

  it("should handle SET_POSITION_MUTE", () => {
    const value = true,
          position = 5,
          index = 1,
          action = setPositionMute(index, position, value),
          result = mutedPositions({}, action);
    expect(result.mutedPositions[index][position]).toEqual(value);
  });
});
