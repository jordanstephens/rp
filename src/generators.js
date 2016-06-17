import random from "lodash/random";

const generators = [
  {
    f: () => (random(0, 1, true)),
    min: 0,
    max: 1
  },
  {
    f: (x) => (x),
    min: 0,
    max: 1
  },
  {
    f: (x) => (-x),
    min: -1,
    max: 0
  },
  {
    f: (x) => ((Math.sin(x) / 2) + 0.5),
    min: 0,
    max: Math.PI * 2
  },
  {
    f: (x) => ((Math.cos(x) / 2) + 0.5),
    min: 0,
    max: Math.PI * 2
  }
];

export default generators;
