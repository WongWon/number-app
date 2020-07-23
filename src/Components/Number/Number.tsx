import React, { useState } from  'react';
import Condition from '../Condition/Condition'
import  './Number.css';

const Number = () => {
    let [number, setNumber] = useState('')
    let [response, setResponseData] = useState({});

    const uriEncodedNumber = encodeURIComponent(number)

    function getNumber(e: { preventDefault: () => void; }) {
        e.preventDefault();
           fetch(
                `http://numbersapi.com/${uriEncodedNumber}/trivia?json`)
            .then(response =>
                response.json())
            .then(response => {
                setResponseData(response)
            })
        } 

    return (
        <div>
           <div>
               {JSON.stringify(response)}
           </div>
           <form onSubmit={getNumber}>
                <input
                    type="text"

                    placeholder="Enter Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    />
                <button type="submit">Get Number</button> 
            </form>

        <Condition response={response}/> 

       </div>
    )
}

export default Number