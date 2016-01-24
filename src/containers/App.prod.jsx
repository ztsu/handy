import React from "react";
import { Provider } from "react-redux";
import Handy from "./Handy.jsx";

export default class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Handy />
      </Provider>
    );
  }
}
