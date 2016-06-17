
export const MANUAL_COUNT = 2;
export const STEP_COUNT = 8;
export const METER = 4;
export const BARS = STEP_COUNT / METER;

// measured in dBs
export const INITIAL_VOLUME = 0.5;
export const MAX_VOLUME = 1.0;
export const MIN_VOLUME = 0.0;

export const MIN_PULSE_WIDTH = 0.025;
export const MAX_PULSE_WIDTH = 1.0;
export const INITIAL_PULSE_WIDTH = (MAX_PULSE_WIDTH - MIN_PULSE_WIDTH) / 2 + MIN_PULSE_WIDTH;

// measured in bpm
export const INITIAL_TEMPO = 480;
export const MAX_TEMPO = 840;
export const MIN_TEMPO = 120;
export const TEMPO_DEPTH = MAX_TEMPO - MIN_TEMPO;
export const MIN_FREQUENCY = 55.0;
export const MAX_FREQUENCY = 880.0;
export const FREQUENCY_DEPTH = MAX_FREQUENCY - MIN_FREQUENCY;
