import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

export default class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string
    }),
    addToOrder: PropTypes.func
  };

  handleClick = () => {
    //add fish to cart
    this.props.addToOrder(this.props.index); //props from App.js
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add to cart" : "Sold Out"}
        </button>
      </li>
    );
  }
}
