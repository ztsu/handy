import React from "react";

export default class Counter extends React.Component{
  render() {
    const { current, total } = this.props;

    return (
      <div className="handy-counter">{current} of {total}</div>
    );
  }
}
