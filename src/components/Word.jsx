import React from "react";
import ReactDOM from "react-dom";

export default class Word extends React.Component {
  handleMouseEnter() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    const { word } = this.props;

    return (
      <ul className="cosy-word" onMouseEnter={e => this.handleMouseEnter()}>
        <li className="cosy-word-item _apa">{word[1]}</li>
        <li className="cosy-word-item _word">{word[0]}</li>
        <li className="cosy-word-item _tr">{word[2]}</li>
      </ul>
    );
  }
}