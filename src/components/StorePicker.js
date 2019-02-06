import React, { Component } from "react";
import { getFunName } from "../helpers";

export default class StorePicker extends Component {
  myInput = React.createRef;
  handleSubmit = event => {
    //prevent form from submitting
    event.preventDefault();
    //get text from input

    //changing page to the homepage
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="store-selector">
          <h2>Please Enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store →</button>
        </form>
      </React.Fragment>
    );
  }
}
