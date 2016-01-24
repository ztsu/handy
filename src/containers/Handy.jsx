import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { next, prev } from "../redux/reducer.js";
import Word from "../components/Word.jsx"

class Handy extends React.Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    const { dispatch } = this.props;
    const word = this.props.words[this.props.current];

    const keyMap = {
      "left": ["left", "h"],
      "right": ["right", "l"]
    };

    const handlers = {
      "left": (event) => dispatch(prev()),
      "right": (event) => dispatch(next())
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <div className="cosy-layout">
          <Word word={word} />
        </div>
      </HotKeys>
    );
  }
}

export default connect(state => state)(Handy);
