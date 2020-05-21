/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Rohan', age: 21},
      {name: 'Sneh', age: 18},
      {name: 'Kevin', age: 17}
    ] 
  });

  const [otherState, ] = useState("Some Other Value")

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Rohan Borakhatariya', age: 21},
        {name: 'Kevin', age: 18},
        {name: 'Sneh', age: 18}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello World !</h1>
      <p>This is working !</p>
      <button onClick={switchNameHandler}> Switch Name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>I want to join INA.</Person>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }/>
    </div>
  );
}

export default app;
