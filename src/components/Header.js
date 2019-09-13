import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    const { tagline } = this.props;
    return (
      <header className="top">
        <h1>Catch of the day!</h1>
        <h3 className="tagline">
          <span>{tagline}</span>
        </h3>
      </header>
    );
  }
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
