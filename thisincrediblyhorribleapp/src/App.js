import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import Form from './Components/Form';
import Person from './Components/Person';
import Validation from './Components/Validation';
import * as yup from 'yup';

//setting up div
const Comp = styled.div``;
const Wrapper = styled.div``;
const PersonWrapper = styled.div``;

//initialPerson constructor
const initialPerson = {name:'', email:'', password:'', terms:false};

const App = ()=> 
{
  const [person,setPerson] = useState(initialPerson);
  const [people,setPeople] = useState([]);
  const [disabled,setDisabled] = useState(true);
  const val = (name, value) =>
  {
    yup
      .reach(Validation, name)
      .validate(value)
  }

  const change = (event) =>
  {
    const {name, type, checked, value}  = event.target;
    const whatValueIsIt= type === 'checkbox' ?checked :value ;
    //value from event
    //person = object
    val(name, whatValueIsIt);
    setPerson({...person, [name]:whatValueIsIt}); 
    //... fetch person info
    //change name to value
    //look at initialization
  }

  const submit = (event) =>
  {
    event.preventDefault(); // prevents page from reloading
    const newPerson =  {name:person.name, email:person.email, password:person.password, terms:person.terms};
    setPeople([...people, newPerson]);
    setPerson(initialPerson);//reset
    //people = array 
  }
  useEffect(()=>
  {
    Validation.isValid(person).then(valid =>
      {
        setDisabled(!valid);
      })
  },[person]);
  return (
    <Comp>
      <Wrapper>
        <Form person = {person} change = {change} submit = {submit} disabled = {disabled}/>
      </Wrapper>
      <PersonWrapper>
        {
        people.map(person=>
        {
          return(
            <Person name = {person.name} email = {person.email} password = {person.password} terms = {person.terms}/>
          )
        }
        )}
      </PersonWrapper>
    </Comp>
  )
}

export default App;
