import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleBoxColor } from '../actions/actions';

const Box = ({color, toggleBoxColor}) => {
  return (
    <div>
      <div className={color}
      onClick={() => toggleBoxColor()}>
      dsfadsf
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleBoxColor: (color) => {
      dispatch(toggleBoxColor(color));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);
