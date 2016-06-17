import { connect } from "react-redux";

import ControlBank from "./control-bank";

import {
  setPulseWidth,
  setVolume
} from "../actions";

const mapStateToProps = (state, props) => ({
  volume: state.volume[props.index],
  pulseWidth: state.pulseWidth[props.index]
});

const mapDispatchToProps = (dispatch, props) => ({
  onVolumeChange(value) {
    dispatch(setVolume(props.index, value));
  },
  onPulseWidthChange(value) {
    dispatch(setPulseWidth(props.index, value));
  }
});

const ControlBankContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBank);

export default ControlBankContainer;
