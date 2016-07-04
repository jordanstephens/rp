import { connect } from "react-redux";

import Tone from "tone";

import TransportBar from "./transport-bar";

import {
  setTempo,
  setPauseMode
} from "../actions";

const mapStateToProps = (state) => ({
  tempo: state.tempo,
  pauseMode: state.pauseMode
});

const mapDispatchToProps = (dispatch) => ({
  onTempoChange(value) {
    Tone.Transport.bpm.value = value;

    dispatch(setTempo(value));
  },
  onPauseModeChange(value) {
    if (value === true) {
      Tone.Transport.pause();
    } else {
      Tone.Transport.start();
    }

    dispatch(setPauseMode(value));
  }
});

const TransportBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportBar);

export default TransportBarContainer;
