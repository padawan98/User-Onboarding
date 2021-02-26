import React from 'react';


const Person = (props)=>
{
    const {name, email, password} = props;
    return(
        <div>
            <h2>
                {name}
            </h2>
            <p>
                {email}
            </p>
            <p>
                {password}
            </p>
        </div>
    )
}




export default Person;