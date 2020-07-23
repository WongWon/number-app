import React from 'react';
const Condition = (props) => {
   return (
       <div>
           {props.response.cod === 200 ?
               <div>
                   <p><strong>{props.response.name}</strong></p>
               </div>
           : null
           }
       </div>
   )
}
export default Condition;