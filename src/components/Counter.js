import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment } from "../ac";

const Counter = ({ number, handleIncrement }) => {
  return (
    <div>
      <h3>{number}</h3>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  handleIncrement: PropTypes.func
};

const mapStateToProps = storeState => ({
  number: storeState.counter
});

const mapDispatchToProps = {
  handleIncrement: increment //from action creator
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
