import React from "react";
import Person from "./Person/Person";

const persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((eachPerson, index) => {
    
    return (
      <Person
        click={() => props.clicked(index)}
        key={eachPerson.id}
        name={eachPerson.name}
        age={eachPerson.age}
        changed={(event) => props.changed(event, eachPerson.id)}
      />
    );
  });
}
  
export default persons;
