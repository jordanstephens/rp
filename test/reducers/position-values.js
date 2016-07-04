import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setPositionValue } from "../../src/actions";
import positionValues from "../../src/reducers";

describe("positionValues reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = positionValues(undefined, action);
    expect(result.positionValues).toEqual(initialState.positionValues);
  });

  it("should handle SET_POSITION_VALUE", () => {
    const value = 0.6,
          position = 5,
          index = 1,
          action = setPositionValue(index, position, value),
          result = positionValues({}, action);
    expect(result.positionValues[index][position]).toEqual(value);
  });
});
