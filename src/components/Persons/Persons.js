import React, { Component } from 'react'

import Person from "./Person/Person"

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log("[Persons.js] getDividedStateFromProps")
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getDSnapshotBeforeUpdate")
        return {message: 'Snapshot !'}
    }

    componentDidUpdate(prevProp, prevState, snapshot){
        console.log("[Persons.js] componentDidUpdate")
        console.log(snapshot)
    }
    
    render() {
        console.log("[Persons.js] rendering...")
    return (
        this.props.persons.map((person, index) => {
            return (
              <Person
                click={() => this.props.clicked( index )}
                changed={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })
    )
    }
};

export default Persons