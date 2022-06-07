import React from 'react'
import ReactDOM from 'react-dom'
import { books } from './books'
import { Book } from './Book'

// CSS
import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} key={book.id}></Book>
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
