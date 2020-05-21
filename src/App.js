import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: 'Rohan', age: 21},
      {name: 'Kevin', age: 18},
      {name: 'Sneh', age: 17}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name: 'Kevin', age: 18},
        {name: 'Sneh', age: 18}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Rohan', age: 21},
        {name: event.target.value, age: 18},
        {name: 'Sneh', age: 18}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World !</h1>
        <p>This is working !</p>
        <button onClick={() => this.switchNameHandler('Rohan Borakhatariya')}> Switch Name</button>
        <Person 
          name = { this.state.persons[0].name } 
          age = { this.state.persons[0].age }
        />
        <Person 
          click = { this.switchNameHandler.bind(this, 'Rony') }
          changed = { this.nameChangedHandler }
          name = { this.state.persons[1].name } 
          age = { this.state.persons[1].age }>
            I want to join INA.
        </Person>
        <Person 
          name = { this.state.persons[2].name }
          age = { this.state.persons[2].age }
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('header', {className: 'App-header'}, 'Hello World !!'))
  }
}

export default App;