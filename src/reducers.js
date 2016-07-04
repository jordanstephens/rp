import { combineReducers } from "redux";

import { updateValueAtIndex } from "./util";
import initialState from "./initialState";

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

const pauseMode = (state = initialState.pauseMode, action) => {
  return standardReducer("SET_PAUSE_MODE", state, action);
};

const tempo = (state = initialState.tempo, action) => {
  return standardReducer("SET_TEMPO", state, action);
};

const waveform = (state = initialState.waveform, action) => {
  return listReducer("SET_WAVEFORM", state, action);
};

const reverseMode = (state = initialState.reverseMode, action) => {
  return listReducer("SET_REVERSE_MODE", state, action);
};

const randomMode = (state = initialState.randomMode, action) => {
  return listReducer("SET_RANDOM_MODE", state, action);
};

const volume = (state = initialState.volume, action) => {
  return listReducer("SET_VOLUME", state, action);
};

const pulseWidth = (state = initialState.pulseWidth, action) => {
  return listReducer("SET_PULSE_WIDTH", state, action);
};

const activePosition = (state = initialState.activePosition, action) => {
  return listReducer("SET_ACTIVE_POSITION", state, action);
};

const positionValues = (state = initialState.positionValues, action) => {
  return nestedListReducer("SET_POSITION_VALUE", state, action);
};

const mutedPositions = (state = initialState.mutedPositions, action) => {
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
