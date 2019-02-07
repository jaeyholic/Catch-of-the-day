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

  addToOrder = key => {
    //Take a copy of the state.
    const order = { ...this.state.order };
    //add order to order or update the number in order
    order[key] = order[key] + 1 || 1;
    //call setstate to update state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
