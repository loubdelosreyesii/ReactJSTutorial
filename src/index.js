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
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
