import React from 'react';
// import styled from 'styled-components';

//

const Form = (props)=>
{
    const {person, change, submit, disabled} = props;
    console.log(props);
    return(
        <div>
            <form>
                <p>Name:</p>
                <input type = 'text' name = 'name' value = {person.name} onChange = {change}/>
                <p>Email:</p>
                <input type = 'email' name = 'email' value = {person.email} onChange = {change}/>
                <p>Password:</p>
                <input type = 'password' name = 'password' value = {person.password} onChange = {change}/>
                <p>Terms of Service</p>
                <input type = 'checkbox' name = 'terms' value = {person.terms} onChange = {change}/>
                <button disabled = {disabled} onClick = {submit}>Submit</button>
            </form>
        </div>
    );
};

export default Form;