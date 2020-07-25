import React, { useState } from  'react';
import Condition from '../Condition/Condition'
import  './Number.css';

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
        <div>
            <div>
                <Condition responseObj = {responseObj}/>
            </div>
           <form onSubmit={getNumber}>
                <input
                    type="number"
                    min =  "0"
                    max = "100"
                    placeholder="Enter Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button type="submit">Get Number</button> 
            </form>
       </div>
    )
}

export default Number