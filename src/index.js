import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const title = 'Interesting Facts for Curious Minds'
const author = 'Jordan Moore'
const img = './images/book-1.jpg'

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
<<<<<<< HEAD
      {/* If the property is not assigned with a value, the will use the alternative value assigned. */}
      <Book author={author} title={title}  />
=======
>>>>>>> d802d055ff0ae861a5b403f4b7a0d1b2d4ce06a0
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
<<<<<<< HEAD
      <h4>{props.author}</h4>
=======
      <h4>{props.author}s</h4>
>>>>>>> d802d055ff0ae861a5b403f4b7a0d1b2d4ce06a0
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
