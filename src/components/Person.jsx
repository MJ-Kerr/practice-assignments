import React from "react";

const Person = (props) => {
    console.log(props);
  return (
  <fieldset>
    <legend>Person.jsx</legend>
    Person is {props.personName}
  </fieldset>
  )
};

export default Person;
