import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    idx: PropTypes.string,
    updateFish: PropTypes.func
  };

  handleChange = event => {
    //update that fish
    //1 take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
      [event.currentTarget.price]: event.currentTarget.value,
      [event.currentTarget.status]: event.currentTarget.value,
      [event.currentTarget.desc]: event.currentTarget.value,
      [event.currentTarget.image]: event.currentTarget.value
    };
    this.props.updateFish(this.props.idx, updatedFish);
  };

  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <select name="status" value={status} onChange={this.handleChange}>
          <option value="available">Fresh</option>
          <option value="unavailable">Out of stock!</option>
        </select>
        <textarea name="desc" value={desc} onChange={this.handleChange} />
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.idx)}>
          Remove Fish!
        </button>
      </div>
    );
  }
}

export default EditFishForm;
