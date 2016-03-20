import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { open } from "../redux/words";
import { next, prev } from "../redux/current";
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
      "left": () => current > 0 && dispatch(prev()),
      "right": () => current < words.length - 1 && dispatch(next()),
      "open": () => dispatch(open(current))
    };

    const touchHandlers = {
      "onTap": () => dispatch(open(current)),
      "onSwipeLeft": () => dispatch(prev()),
      "onSwipeRight": () => dispatch(next())
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <div className="handy-layout">
          {words.slice(current, current + 1).map(word => <Word key={word} {...word} {...touchHandlers}/>)}
          <Counter current={current + 1} total={words.length}/>
        </div>
      </HotKeys>
    );
  }
}

export default connect(state => state)(Handy);
