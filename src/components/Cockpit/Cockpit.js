/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import classes from "./Cockpit.module.css"

const cockpit = (props) => {

    useEffect( () => {
        console.log("[Cockpit.js] useEffect")
        setTimeout( () =>  alert("Save data to cloud !"), 1000)
        return () => console.log("[Cokpit.js] cleanup work in useEffect.")
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect")
        return () => console.log("[Cokpit.js] cleanup work in 2nd useEffect.")
    })

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