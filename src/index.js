import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts for Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book)

        const { img, title, author, id } = book
        return <Book img={img} title={title} author={author} key={id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
