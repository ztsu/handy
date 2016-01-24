import React from "react";
import { Provider } from "react-redux";
import DevTools from "./DevTools.jsx";
import Handy from "./Handy.jsx";

export default class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Handy />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
