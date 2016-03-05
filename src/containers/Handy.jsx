import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { next, prev, open } from "../redux/reducer.js";
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
      "right": ["right", "l"],
      "open": ["enter", "o"]
    };

    const handlers = {
      "left": (event) => dispatch(prev()),
      "right": (event) => dispatch(next()),
      "open": (event) => dispatch(open())
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <div className="handy-layout">
          {words.slice(current, current + 1).map(word => <Word key={word} {...word} onTap={() => dispatch(next())}/>)}
          <Counter current={current + 1} total={words.length} />
        </div>
      </HotKeys>
    );
  }
}

export default connect(state => state)(Handy);
