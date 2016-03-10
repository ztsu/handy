import React from "react";
import ReactDOM from "react-dom";
import Swipeable from "react-hammerjs";


export default class Word extends React.Component {
  handleMouseEnter() {
    ReactDOM.findDOMNode(this).focus();
  }

  render() {
    const { word, ipa, translations, open, onTap, onSwipeLeft, onSwipeRight } = this.props;

    return (
      <Swipeable onTap={onTap} onSwipe={event => event.velocityX > 0 ? onSwipeLeft() : onSwipeRight()}>
        <ul className="handy-word" onMouseEnter={e => this.handleMouseEnter()}>
          <li className={["handy-word-item", "_ipa", open ? "" : "_hidden"].join(" ")}>{ipa}</li>
          <li className={["handy-word-item", "_word"].join(" ")}>{word}</li>
          <li className={["handy-word-item", "_tr", open ? "" : "_hidden"].join(" ")}>{translations[0]}</li>
        </ul>
      </Swipeable>
    );
  }
}
