import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func
  };

  renderOrder = key => {
    const fish = this.props.fishes[key];
    //make sure fishes are loaded before continuing
    if (!fish) return null;
    const transOptions = {
      classNames: "order",
      key: { key },
      timeout: { enter: 2500, exit: 2500 }
    };
    const nrFish = this.props.order[key];
    if (fish.status !== "available") {
      return (
        <CSSTransition {...transOptions}>
          <li key={key}>
            Sorry, {fish ? fish.name : "fish"} is no longer available!
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition {...transOptions}>
                <span>{nrFish}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name} &nbsp;
            {formatPrice(nrFish * fish.price)} &nbsp;
            <button onClick={() => this.props.deleteFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total :<strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
