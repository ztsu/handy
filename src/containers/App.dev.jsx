import React from "react";
import { Provider } from "react-redux";
import DevTools from "./DevTools.jsx";
import Word from "./Word.jsx";

export default class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Word />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
