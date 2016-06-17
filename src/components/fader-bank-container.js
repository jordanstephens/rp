import { connect } from "react-redux";

import FaderBank from "./fader-bank";

import {
  setPositionValue
} from "../actions";

const mapStateToProps = (state, props) => ({
  positionValues: state.positionValues[props.index]
});

const mapDispatchToProps = (dispatch, props) => ({
  onChange(position, value) {
    dispatch(setPositionValue(props.index, position, value));
  }
});

const FaderBankContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FaderBank);

export default FaderBankContainer;
