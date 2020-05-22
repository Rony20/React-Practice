import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id:"n1", name: 'Rohan', age: 21},
      {id:"n2", name: 'Kevin', age: 18},
      {id:"n3", name: 'Sneh', age: 17}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(per => per.id === id)

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  deletePersonhandler = (personIndex) => {
    // const persons = this.state.persons.slice() copies the array instead of passing reference only.
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    let tempShowPerson = this.state.showPersons
    this.setState({ showPersons: !tempShowPerson })
  }

  render() {

    const style = {
      backgroundColor: 'blue',
      color: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return <Person 
              click = { this.deletePersonhandler.bind(this, index) }
              changed = {(event) => this.nameChangedHandler(event, person.id)}
              name = {person.name} 
              age = {person.age}
              key = { person.id }/>
          }) }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello World !</h1>
        <p>This is working !</p>
        <button 
          style = { style }
          onClick={ this.togglePersonHandler }
        > 
            Switch Name
        </button>
        { persons }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('header', {className: 'App-header'}, 'Hello World !!'))
  }
}

export default App;