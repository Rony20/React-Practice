import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.module.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
    console.log(this.context.authenticated); //this.context is provided by react beacsue we are using static contextType
  }

  static contextType = AuthContext; //static contextType is given by react. 

  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={classes.Person}>
        {this.context.authenticated ? (
          <p>Authenticated !</p>
        ) : (
          <p>Please log in !</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name}. I'm {this.props.age} years old !
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={(inputEl) => {
            this.inputElement = inputEl;
          }}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
