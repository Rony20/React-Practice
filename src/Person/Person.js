import React from 'react';
import styled from 'styled-components'

// import "./Person.css"

const person = (props) => {

    const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 5px #ccc;
        padding: 16px;
        text-align: center;
        cursor: pointer;

        @media (min-width: 500px) {
            width: 400px;
        }
    `

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        <StyledDiv>
            <p onClick = { props.click }>I'm { props.name }. I'm { props.age } years old !</p>
            <p>{ props.children }</p>
            <input type="text" onChange = { props.changed } value = { props.name }/>
        </StyledDiv>
    );
}

export default person;


