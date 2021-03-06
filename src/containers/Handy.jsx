import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { open } from "../redux/words";
import { next, prev } from "../redux/current";
import Word from "../components/Word.jsx"
import Counter from "../components/Counter.jsx"
import LoadingIndicator from "../components/Loading"

class Handy extends React.Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    const { dispatch, loading, words, current } = this.props;

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
      "onSwipeLeft": () => current > 0 && dispatch(prev()),
      "onSwipeRight": () => current < words.length - 1 && dispatch(next()),
      "onTap": () => dispatch(open(current)),
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        {loading > 0 && <LoadingIndicator/>}
        <div className="handy-layout">
          {words.slice(current, current + 1).map(word => <Word key={word} {...word} {...touchHandlers}/>)}
          <Counter current={current + 1} total={words.length}/>
        </div>
      </HotKeys>
    );
  }
}

export default connect(state => state)(Handy);
