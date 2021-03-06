
export function setPauseMode(value) {
  return {
    type: "SET_PAUSE_MODE",
    value
  };
}

export function setTempo(value) {
  return {
    type: "SET_TEMPO",
    value
  };
}

export function setWaveform(index, value) {
  return {
    type: "SET_WAVEFORM",
    index,
    value
  };
}
export function setReverseMode(index, value) {
  return {
    type: "SET_REVERSE_MODE",
    index,
    value
  };
}

export function setRandomMode(index, value) {
  return {
    type: "SET_RANDOM_MODE",
    index,
    value
  };
}

export function setPulseWidth(index, value) {
  return {
    type: "SET_PULSE_WIDTH",
    index,
    value: Math.min(Math.max(value, 0), 1)
  };
}

export function setVolume(index, value) {
  return {
    type: "SET_VOLUME",
    index,
    value: Math.min(Math.max(value, 0), 1)
  };
}

export function setActivePosition(index, value) {
  return {
    type: "SET_ACTIVE_POSITION",
    index,
    value
  };
}

export function setPositionValue(index, position, value) {
  return {
    type: "SET_POSITION_VALUE",
    index,
    position,
    value: Math.min(Math.max(value, 0), 1)
  };
}

export function setPositionMute(index, position, value) {
  return {
    type: "SET_POSITION_MUTE",
    index,
    position,
    value
  };
}
