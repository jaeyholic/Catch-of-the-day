import React, { Component } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

export default class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  myInput = React.createRef();
  goToStore = event => {
    //prevent form from submitting
    event.preventDefault();
    //get text from input
    const storeName = this.myInput.current.value;
    //changing page to the homepage
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form onSubmit={this.goToStore} className="store-selector">
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
    );
  }
}
