import React, { Component } from "react";
import SampleFishes from "../sample-fishes";

//Components
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //take a copy of an existing object
    const fishes = { ...this.state.fishes };
    //add new fish to fishes state
    fishes[`fish${Date.now()}`] = fish;
    //set the new fishes object to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    //setting fishes samples to state
    this.setState({ fishes: SampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
