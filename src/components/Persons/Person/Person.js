import React, { Component } from "react";

import Aux from "../../HOC/Auxiliary"
import classes from "./Person.module.css";

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name}. I'm {this.props.age} years old !
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
};

export default Person;
