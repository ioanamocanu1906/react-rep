import React from "react";
import PropTypes from "prop-types";
const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage inventory!</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log in with Github
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func
};

export default Login;
