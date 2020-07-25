import React, { useState } from  'react';
import Condition from '../Condition/Condition'
import  './Number.css';

import { TextField, Button, Container } from '@material-ui/core'

const Number = () => {
    let [number, setNumber] = useState('')
    let [responseObj, setResponseObj] = useState(Object);


    const uriEncodedNumber = encodeURIComponent(number)


    function getNumber(e: { preventDefault: () => void; }) {
        e.preventDefault();
           fetch(
                `http://numbersapi.com/${uriEncodedNumber}/trivia?json`)
            .then(responseObj =>
                responseObj.json())
            .then(responseObj => {
                setResponseObj(responseObj)
            })
        } 

    return (
        <div className = "responseContainer">

            <Condition responseObj = {responseObj}/>

            <Container>
            <form onSubmit={getNumber} id = "formContainer">
                    <TextField
                    id = "numberInput"
                    label = "Number"
                    variant = "outlined"
                    type = "number"
                    InputProps={{
                        inputProps: { 
                            max: 100, min: 0 
                        }
                    }}
                    placeholder="Enter Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}/>


                    <Button
                    type = "submit"
                    variant = "contained"
                    size = "small"
                    color = "primary"
                    id = "submitButton">

                        Get Number Fact
                    </Button>

            </form>

            </Container>
       </div>
    )
}

export default Number