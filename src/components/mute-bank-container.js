import { connect } from "react-redux";

import MuteBank from "./mute-bank";

import {
  setPositionMute
} from "../actions";

const mapStateToProps = (state, props) => {
  return {
    activePosition: state.activePosition[props.index],
    mutedPositions: state.mutedPositions[props.index]
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  onMute(position, value) {
    dispatch(setPositionMute(props.index, position, value));
  }
});

const MuteBankContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MuteBank);

export default MuteBankContainer;
