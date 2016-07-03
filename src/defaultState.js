import generators from "./generators";
import { sampleFunction } from "./util";

import {
  INITIAL_VOLUME,
  INITIAL_TEMPO,
  INITIAL_PULSE_WIDTH,
  STEP_COUNT,
  MANUAL_COUNT
} from "./constants";

const generator = generators[1];
const DEFAULT_FADER_VALUES = sampleFunction(
  generator.f,
  generator.min,
  generator.max,
  STEP_COUNT
);
const DEFAULT_MUTE_VALUES = Array(STEP_COUNT).fill(false);

const defaultState = {
  pauseMode: false,
  tempo: INITIAL_TEMPO,
  // per manual states
  waveform: ["triangle", "square"],
  mutedPositions: Array(MANUAL_COUNT).fill(DEFAULT_MUTE_VALUES),
  volume: Array(MANUAL_COUNT).fill(INITIAL_VOLUME),
  randomMode: Array(MANUAL_COUNT).fill(false),
  reverseMode: Array(MANUAL_COUNT).fill(false),
  pulseWidth: Array(MANUAL_COUNT).fill(INITIAL_PULSE_WIDTH),
  activePosition: Array(MANUAL_COUNT).fill(0),
  positionValues: Array(MANUAL_COUNT).fill(DEFAULT_FADER_VALUES)
};
export default defaultState;
