import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";
class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    //1. Stop form from submitting
    event.preventDefault();
    //2. Get text from input
    const storeName = this.myInput.current.value;
    // console.log(storeName);
    //3. Change the page to /store/store-name
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store!</h2>
          <input
            type="text"
            ref={this.myInput}
            placeholder="Store Name"
            defaultValue={getFunName()}
            required
          />
          <button type="submit">Visit Store!</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
