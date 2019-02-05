import React, { Component } from "react";

//Components
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

export default class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Inventory />
        <Order />
      </div>
    );
  }
}
