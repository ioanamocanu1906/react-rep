import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //make a copy of the existing state
    const fishes = { ...this.fishes };
    //add new fish to fishes var
    fishes[`fish${Date.now()}`] = fish;
    //set the new fishes obj to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1. Take copy of state
    const order = { ...this.state.order };
    //2.Add to the order or update the order
    order[key] = order[key] + 1 || 1;
    //set new order to state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Daily!" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
                idx={key}
              />
            ))}
          </ul>
        </div>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
        <Order fishes={this.state.fishes} order={this.state.order} />
      </div>
    );
  }
}

export default App;
