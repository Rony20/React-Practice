import React, { Component } from "react";
import classes from "./App.module.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor.");
  }

  state = {
    persons: [
      { id: "n1", name: "Rohan", age: 21 },
      { id: "n2", name: "Kevin", age: 18 },
      { id: "n3", name: "Sneh", age: 17 },
    ],
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] get derived state from props.", props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] coponent did mount')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((per) => per.id === id);

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonhandler = (personIndex) => {
    // const persons = this.state.persons.slice() copies the array instead of passing reference only.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    let tempShowPerson = this.state.showPersons;
    this.setState({ showPersons: !tempShowPerson });
  };

  render() {
    console.log("[App.js] render.")
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('header', {className: 'App-header'}, 'Hello World !!'))
  }
}

export default App;
