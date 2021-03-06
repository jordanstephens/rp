import * as React from "react";
import Tone from "tone";

import {
  METER,
  BARS,
  FREQUENCY_DEPTH,
  MIN_FREQUENCY,
  MANUAL_COUNT,
  INITIAL_TEMPO
} from "../constants";

import { loop, getActivePosition, relativeVolumeToDecibels } from "../util";

import store from "../store";
import { setActivePosition, setTempo } from "../actions";

import Manual from "./manual";
import TransportBarContainer from "./transport-bar-container";

const initializeVoices = (waveforms) => {
  return waveforms.map((type) => {
    return new Tone.MonoSynth({
      "oscillator": {
        "type": type
      }
    }).toMaster();
  });
};

const initializeTone = () => {
  Tone.Transport.timeSignature = METER;
  Tone.Transport.loopEnd = `${BARS}:0:0`;
  Tone.Transport.loop = true;
};

const triggerVoice = (voice, pitchPosition, pulseWidth, time) => {
  const frequency = pitchPosition * FREQUENCY_DEPTH + MIN_FREQUENCY;
  voice.triggerAttackRelease(frequency, `0:${pulseWidth}:0`, time);
};

const onToneFrame = (voices, time) => {
  const state = store.getState(),
        tonePosition = Tone.Transport.position,
        timeSignature = Tone.Transport.timeSignature;

  voices.forEach((voice, i) => {
    const waveform = state.waveform[i],
          pulseWidth = state.pulseWidth[i],
          reverseMode = state.reverseMode[i],
          randomMode = state.randomMode[i],
          mutedPositions = state.mutedPositions[i],
          pitchPositions = state.positionValues[i],
          volume = state.volume[i],
          activePosition = getActivePosition(
            tonePosition,
            timeSignature,
            randomMode,
            reverseMode
          ),
          isMuted = mutedPositions[activePosition],
          pitchPosition = pitchPositions[activePosition];

    if (voice.oscillator.type !== waveform) {
      voice.oscillator.type = waveform;
    }
    
    voice.volume.value = relativeVolumeToDecibels(volume);

    if (!isMuted) {
      triggerVoice(voice, pitchPosition, pulseWidth, time);
    }

    store.dispatch(setActivePosition(i, activePosition));
  });
};

export default class App extends React.Component {
  componentDidMount() {
    const voices = initializeVoices([
      "triangle",
      "square"
    ]);

    store.dispatch(setTempo(INITIAL_TEMPO));
    initializeTone();
    Tone.Transport.scheduleRepeat((time) => onToneFrame(voices, time), "4n");
    Tone.Transport.start();
  }

  render() {
    const appStyle = {
             display: "flex",
             flexDirection: "column",
             alignContent: "stretch",
             padding: "0 20px",
             height: "100%",
             width: "100%"
          },
          headStyle = {
            padding: 10
          },
          mainStyle = {
             display: "flex",
             flexDirection: "column",
             alignContent: "stretch"
          };
    return (
      <div className="app" style={appStyle}>
        <div style={headStyle}>
          <div style={{ float: "right" }}>
            Thrown together by <a href="http://twitter.com/jordanstephens">@jordanstephens</a> • <a href="http://github.com/jordanstephens/rp">Source Code</a>
          </div>
          <h1 style={{ fontSize: "1em", margin: 0 }}>RP Sequencer</h1>
        </div>
        <div style={mainStyle}>
          <div style={{ flex: 1 }}>
            {loop(MANUAL_COUNT, (i) => (
              <Manual key={i} index={i} />
            ))}
          </div>
          <div>
            <TransportBarContainer />
          </div>
        </div>
      </div>
    );
  }
}
