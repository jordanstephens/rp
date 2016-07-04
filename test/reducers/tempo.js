import "mocha";
import expect from "expect";
import initialState from "../../src/initialState";
import { setTempo } from "../../src/actions";
import tempo from "../../src/reducers";

describe("tempo reducer", () => {
  it("should return the initial state", () => {
    const action = {},
          result = tempo(undefined, action);
    expect(result.tempo).toEqual(initialState.tempo);
  });

  it("should handle SET_TEMPO", () => {
    const value = 150,
          action = setTempo(value),
          result = tempo({}, action);
    expect(result.tempo).toEqual(value);
  });
});
