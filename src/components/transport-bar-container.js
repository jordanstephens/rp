import { connect } from "react-redux";

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
    dispatch(setTempo(value));
  },
  onPauseModeChange(value) {
    dispatch(setPauseMode(value));
  }
});

const TransportBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportBar);

export default TransportBarContainer;
