import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setActivePosition } from "../../src/actions";
import activePosition from "../../src/reducers";

describe("activePosition reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = activePosition(undefined, action);
    expect(result.activePosition).toEqual(initialState.activePosition);
  });

  it("should handle SET_ACTIVE_POSITION", () => {
    const value = 6,
          index = 1,
          action = setActivePosition(index, value),
          result = activePosition({}, action);
    expect(result.activePosition[index]).toEqual(value);
  });
});
