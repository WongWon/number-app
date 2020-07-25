import React from 'react';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import './Condition.css';

const Condition = (props: { responseObj: { found: boolean; text: React.ReactNode; }; }) => {
   return (
       <div>
           {props.responseObj.found === true ?
               <div className="content">
                   <Typography>
                       {props.responseObj.text}
                    </Typography>
               </div>
           : <div className="content">
               <Typography>Enter a number between 0-100 to learn a fun number fact!</Typography>
            </div>
           }
       </div>
   )
}
export default Condition;