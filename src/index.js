import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'Interesting Facts for Curious Minds'
  const author = 'Jordan Moore'

  return (
    <article className="book">
      <img
        src="./images/book-1.jpg"
        alt="Interesting Facts for Curious Minds"
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* this work */}
      <p>{6 * 6}</p>
      {/* this wont work */}
      {/* <p>{let x = 33}</p> */}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
