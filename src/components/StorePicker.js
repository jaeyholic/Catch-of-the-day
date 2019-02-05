import React, { Component } from "react";

export default class StorePicker extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          <h2>Please Enter a store</h2>
          <input type="text" placeholder="Store Name" />
          <button type="submit">Visit Store →</button>
        </form>
      </React.Fragment>
    );
  }
}
