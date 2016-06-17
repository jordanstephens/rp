import { connect } from "react-redux";

import GlobalTransportBar from "./global-transport-bar";

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

const GlobalTransportBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalTransportBar);

export default GlobalTransportBarContainer;
