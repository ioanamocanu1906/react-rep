import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const nrFish = this.props.order[key];
    return (
      <li key={key}>
        {nrFish} lbs {fish.name}
        {formatPrice(nrFish * fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const nrFish = this.props.order[key];
      const fishAvailable = fish && fish.status === "available";
      if (fishAvailable) {
        return prevTotal + nrFish * fish.price;
      } else return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul>{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
