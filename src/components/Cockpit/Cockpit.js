import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (props.persons.length < 3) {
      classes.push("red"); // classes = ['red']
    }
    if (props.persons.length < 2) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(" ")}>This is really working!</p>
            <button className="button" onClick={props.buttonClicked}>
                Switch Name
            </button>
        </div>
        
    );
};

export default cockpit;