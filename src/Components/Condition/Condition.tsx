import React from 'react';
const conditions = (props: { responseObj: { found: boolean; text: React.ReactNode; }; }) => {
   return (
       <div>
           {props.responseObj.found === true ?
               <div>
                   <p>{props.responseObj.text}</p>
               </div>
           : <div>
               <p>Enter a number between 0-100 to learn a fun number fact!</p>
            </div>
           }
       </div>
   )
}
export default conditions;