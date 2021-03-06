import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };

  //   style = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className="badge bg-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
