import React from 'react';
import ReactDOM from "react-dom/client";

//Lesson 01: Creating a Component.
//React component should start with Capital Letter.
//Creating a component, think of creating a function.
function Greeting(){
    return <h2>My First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>);
