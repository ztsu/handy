import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { next, prev } from "../redux/reducer.js";
import Word from "../components/Word.jsx"
import Counter from "../components/Counter.jsx"

class Handy extends React.Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    const { dispatch, words, current } = this.props;

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
          {words.slice(current, current + 1).map(word => <Word key={word[0]} word={word} />)}
          <Counter current={current + 1} total={words.length} />
        </div>
      </HotKeys>
    );
  }
}

export default connect(state => state)(Handy);
