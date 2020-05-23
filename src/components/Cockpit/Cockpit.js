import React from 'react'
import classes from "./Cockpit.module.css"

const cockpit = (props) => {
    let btnClass = ""

    if(props.showPersons){
        btnClass = classes.Red
    }

    const assignedClasses = [];

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello World !</h1>
            <p className={assignedClasses.join(" ")}>This is working !</p>
            <button className={btnClass} onClick={props.clicked}>
            Toggle Names
            </button>
        </div>
    );
}

export default cockpit