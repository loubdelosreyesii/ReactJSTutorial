import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts for Curious Minds',
  img: './images/book-1.jpg',
}

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          laborum veritatis, magnam aut cum fuga ea esse in consequatur
          dignissimos tempore a quidem optio repudiandae architecto ipsum
          eveniet voluptatum ratione.
        </p>
        <button>Buy Me!</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      {/* If the property is not assigned with a value, the will use the alternative value assigned. */}
      {/* <Book author={author} title={title} /> */}
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
