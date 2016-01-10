import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { next, prev } from "../redux/reducer.js";

class Hello extends React.Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).focus();
  }

  handleMouseEnter(event) {
    //console.log(event, );
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
          <ul className="cosy-word" onMouseEnter={e => this.handleMouseEnter(e)}>
            <li className="cosy-word-item _apa">{word[1]}</li>
            <li className="cosy-word-item _word">{word[0]}</li>
            <li className="cosy-word-item _tr">{word[2]}</li>
          </ul>
        </div>
      </HotKeys>
    );
  }
}

export default connect(state => state)(Hello);
