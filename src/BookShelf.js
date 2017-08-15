import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

render() {

	const {books, title, onMoveBook} = this.props

	return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
            	<ol className="books-grid">
            	{books.map((book)=>
            		<li key={book.id}>
            			<Book data={book} onMoveBook={onMoveBook}/>
            		</li>)}
               	</ol>
          	</div>
        </div>
          )
      }
  }

  export default BookShelf;