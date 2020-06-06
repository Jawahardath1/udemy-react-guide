import React, { Component } from "react";
import "./App.css";
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[Apps.js] Constructor', props);  
  }

  state = {
    persons: [
      { id: "uniqueId1", name: "Max1", age: 28 },
      { id: "uniqueId2", name: "Max2", age: 29 },
      { id: "uniqueId3", name: "Max3", age: 30 },
      { id: "uniqueId4", name: "Max4", age: 40 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[Apps.js] getDerivedStateFromProps', props);
  }

  componentDidMount() {
    console.log('[Apps.js] componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHanlder = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  toggleChangeHandler = () => {
    const doesShow = this.state.showPersons;
    console.log("doesShow: " + doesShow);
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[Apps.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (        
        <Persons          
          persons= {this.state.persons} 
          clicked= {this.deletePersonHanlder}
          changed= {this.nameChangedHandler}
        />
      );     
    }

    return (
      <div className="App">
        <Cockpit 
          title={this.props.appTitle}
          persons={this.state.persons} 
          buttonClicked={this.toggleChangeHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
