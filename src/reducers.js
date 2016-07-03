import { combineReducers } from "redux";

import { updateValueAtIndex } from "./util";
import defaultState from "./defaultState";

const standardReducer = (type, state, action) => {
  switch (action.type) {
    case type:
      return action.value;
    default:
      return state;
  }
};

const listReducer = (type, state, action) => {
  switch (action.type) {
    case type:
      let { index, value } = action;
      return updateValueAtIndex(state, index, value);
    default:
      return state;
  }
};

const nestedListReducer = (type, state, action) => {
  switch (action.type) {
    case type:
      let { index, position, value } = action;
      return updateValueAtIndex(
        state,
        index,
        updateValueAtIndex(state[index], position, value)
      );
    default:
      return state;
  }
};

const pauseMode = (state = defaultState.pauseMode, action) => {
  return standardReducer("SET_PAUSE_MODE", state, action);
};

const tempo = (state = defaultState.tempo, action) => {
  return standardReducer("SET_TEMPO", state, action);
};

const waveform = (state = defaultState.waveform, action) => {
  return listReducer("SET_WAVEFORM", state, action);
};

const reverseMode = (state = defaultState.reverseMode, action) => {
  return listReducer("SET_REVERSE_MODE", state, action);
};

const randomMode = (state = defaultState.randomMode, action) => {
  return listReducer("SET_RANDOM_MODE", state, action);
};

const volume = (state = defaultState.volume, action) => {
  return listReducer("SET_VOLUME", state, action);
};

const pulseWidth = (state = defaultState.pulseWidth, action) => {
  return listReducer("SET_PULSE_WIDTH", state, action);
};

const activePosition = (state = defaultState.activePosition, action) => {
  return listReducer("SET_ACTIVE_POSITION", state, action);
};

const positionValues = (state = defaultState.positionValues, action) => {
  return nestedListReducer("SET_POSITION_VALUE", state, action);
};

const mutedPositions = (state = defaultState.mutedPositions, action) => {
  return nestedListReducer("SET_POSITION_MUTE", state, action);
};

const rootReducer = combineReducers({
  waveform,
  reverseMode,
  randomMode,
  volume,
  pulseWidth,
  activePosition,
  positionValues,
  mutedPositions,
  pauseMode,
  tempo
});

export default rootReducer;
