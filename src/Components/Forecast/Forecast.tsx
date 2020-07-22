import React, { useState, useEffect } from  'react'
import { resolveSoa } from 'dns'

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        useEffect(() => {
            fetch(
                'https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid='+process.env.REACT_APP_API_KEY
            )
            .then((res) => res.json())
            .then((res) => {
                setResponseObj(res)
            })
        }, [])


    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>
    )
}}