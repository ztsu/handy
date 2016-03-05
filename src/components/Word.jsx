import React from "react";
import ReactDOM from "react-dom";
import Tappable from "react-tappable";


export default class Word extends React.Component {
  handleMouseEnter() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    const { word, ipa, translations, open, onTap } = this.props;

    return (
      <Tappable onTap={onTap}>
        <ul className="handy-word" onMouseEnter={e => this.handleMouseEnter()}>
          <li className={["handy-word-item", "_ipa", open ? "" : "_hidden"].join(" ")}>{ipa}</li>
          <li className={["handy-word-item", "_word"].join(" ")}>{word}</li>
          <li className={["handy-word-item", "_tr", open ? "" : "_hidden"].join(" ")}>{translations[0]}</li>
        </ul>
      </Tappable>
    );
  }
}
