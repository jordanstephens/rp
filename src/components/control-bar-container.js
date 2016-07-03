import { connect } from "react-redux";

import ControlBar from "./control-bar";

import {
  setWaveform,
  setRandomMode,
  setReverseMode
} from "../actions";

const mapStateToProps = (state, props) => ({
  waveform: state.waveform[props.index],
  randomMode: state.randomMode[props.index],
  reverseMode: state.reverseMode[props.index]
});

const mapDispatchToProps = (dispatch, props) => ({
  onWaveformChange(value) {
    dispatch(setWaveform(props.index, value));
  },
  onRandomModeChange(value) {
    dispatch(setRandomMode(props.index, value));
  },
  onReverseModeChange(value) {
    dispatch(setReverseMode(props.index, value));
  }
});

const ControlBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar);

export default ControlBarContainer;
