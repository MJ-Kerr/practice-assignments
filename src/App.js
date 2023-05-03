import React, {useState} from 'react';

import './App.css';

// const PersonCard = (props) => {
//   return (
//     <div>
//       <h1>{props.lastName}, {props.firstName}</h1>
//       <p>Age: {props.age}</p>
//       <p>Hair Color: {props.hairColor}</p>
//     </div>
//   )
// }
// //Note: we can pass down a string with or without curly braces.
// <PersonCard firstName="John" lastName="Smith" age={8} hairColor="Brown" />

// export default PersonCard;



// ===========hooks=========

const StatefulComponent = props => {
    const [state, setState] = useState({
        clickCount: 0
    })
    const clickHandler = e => {
        console.log(state)
        setState({
            clickCount: state.clickCount + 1
        })
    }
    return (
        <div>
            <button onClick={clickHandler}>you clicked me {state.clickCount} times!</button>
        </div>
    )
}

export default StatefulComponent;