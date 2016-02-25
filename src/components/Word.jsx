import React from "react";
import ReactDOM from "react-dom";

export default class Word extends React.Component {
  handleMouseEnter() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    const { word } = this.props;

    return (
      <ul className="handy-word" onMouseEnter={e => this.handleMouseEnter()}>
        <li className="handy-word-item _ipa">{word.ipa}</li>
        <li className="handy-word-item _word">{word.word}</li>
        <li className="handy-word-item _tr">{word.translations[0]}</li>
      </ul>
    );
  }
}
