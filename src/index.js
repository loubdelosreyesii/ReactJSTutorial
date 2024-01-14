import React from 'react'
import ReactDOM from 'react-dom/client'

//Lesson 01: Creating a Component.
//React component should start with Capital Letter.
//Creating a component, think of creating a function.
function Greeting2() {
  return (
    <div>
      <h2>My First Component</h2>
    </div>
  )
}

//Lesson 02: Implementation of returning an element using the
//createElement method.
const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'Hello World')
  )
}
export default Greeting

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
