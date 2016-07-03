import random from "lodash/random";

import {
  METER,
  STEP_COUNT
} from "./constants";

export const loop = (times, fn) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result[i] = fn(i);
  }
  return result;
};

export const sampleFunction = (f, min, max, sampleCount) => {
  const depth = max - min,
        resolution = depth / (sampleCount - 1);

  return Array(sampleCount).fill(0).map((_, i) => {
    const x = min + (i * resolution);
    return f(x);
  });
};

export const updateValueAtIndex = (array, index, value) => {
  let newArray = array.slice(); // clone
  newArray[index] = value;
  return newArray;
};

const VOLUME_MULTIPLIER = 10;
export const relativeVolumeToDecibels = (volume) => {
  return VOLUME_MULTIPLIER * Math.log(volume);
};

export const getPositionComponents = (position) => {
  const components = position.split(":");
  return {
    bar: parseInt(components[0], 10),
    beat: parseInt(components[1], 10)
  };
};

export const transportTimeFromPosition = (position) => {
  const bar = parseInt(position / METER, 10),
        beat = position % METER;
  return `${bar}:${beat}:0`;
};

export const getActivePosition = (tonePosition, timeSignature, randomMode, reverseMode) => {
  if (randomMode) {
    return random(0, STEP_COUNT - 1);
  } else {
    const position = getPositionComponents(tonePosition),
          nextPosition = position.bar * timeSignature + position.beat;
    if (reverseMode) {
      return STEP_COUNT - 1 - nextPosition;
    } else {
      return nextPosition;
    }
  }
};
