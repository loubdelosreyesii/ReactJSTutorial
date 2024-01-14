import React from 'react'
import ReactDOM from 'react-dom/client'

//Lesson 01: Creating a Component.
//React component should start with Capital Letter.
//Creating a component, think of creating a function.
//IMPORTANT NOTE: RETURN ONLY 1 PARENT ELEMENT
function Greeting2() {
  return (
    // <div>
    //   <h2>My First Component</h2>
    // </div>
    <React.Fragment>
      <div>
        <h2>Hello People</h2>
        <ul>
          <li>
            <a href="#">Hello world</a>
          </li>
          <li>
            <a href="#">Hello world!!</a>
          </li>
        </ul>
      </div>
      <h2>Hello world</h2>
    </React.Fragment>
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

root.render(<Greeting2 />)
