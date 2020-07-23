import React, { useState } from  'react';
import  './Number.css';


const Number = () => {
    let [response, setResponseData] = useState({});
    let [number, setNumber] = useState('')
    const uriEncodedNumber = encodeURIComponent(number)

    function getNumber() {
           fetch(
                'http://numbersapi.com/${uriEncodedNumber}/trivia?json')
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
                    type="number"
                    placeholder="Enter a Number"
                    
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    />
                <button type="submit">Get Forecast</button>
            </form>
       </div>
    )
}

export default Number