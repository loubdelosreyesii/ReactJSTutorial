import React from 'react'
import ReactDOM from 'react-dom/client'

//Lesson 01: Creating a Component.
//React component should start with Capital Letter.
//Creating a component, think of creating a function.
//IMPORTANT NOTE: RETURN ONLY 1 PARENT ELEMENT
function Greeting2() {
  return (
    <React.Fragment>
      <Person />
      <Message />
    </React.Fragment>
  )
}

const Person = () => <h2>Loucas II</h2>
const Message = () => {
  return <p>This is my message</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting2 />)
