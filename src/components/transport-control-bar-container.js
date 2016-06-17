import { connect } from "react-redux";

import TransportControlBar from "./transport-control-bar";

import {
  setRandomMode,
  setReverseMode
} from "../actions";

const mapStateToProps = (state, props) => ({
  randomMode: state.randomMode[props.index],
  reverseMode: state.reverseMode[props.index]
});

const mapDispatchToProps = (dispatch, props) => ({
  onRandomModeChange(value) {
    dispatch(setRandomMode(props.index, value));
  },
  onReverseModeChange(value) {
    dispatch(setReverseMode(props.index, value));
  }
});

const TransportControlBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportControlBar);

export default TransportControlBarContainer;
