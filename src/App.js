import React, { Component } from 'react';
import styled from 'styled-components'

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

    const StyledButton = styled.button`
      background-color: green;
      color: white;
      font: inherit;
      border: 3px solid black;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: lightgreen;
        color: black;
      }
    `

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: "inherit",
    //   border: "3px solid black",
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

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
      // style.backgroundColor  = "red"
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes = []

    if(this.state.persons.length <= 2) {
      classes.push('red')
    if(this.state.persons.length <= 1) {
      classes.push('bold')
    }
    }

    return (
      <div className="App">
        <h1>Hello World !</h1>
        <p className={classes.join(" ")}>This is working !</p>
        {/* <button 
          style = { style }
          onClick={ this.togglePersonHandler }
        > 
            Toggle Names
        </button> */}
        <StyledButton
          onClick={ this.togglePersonHandler }
        > 
            Toggle Names
        </StyledButton>
        { persons }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('header', {className: 'App-header'}, 'Hello World !!'))
  }
}

export default App;