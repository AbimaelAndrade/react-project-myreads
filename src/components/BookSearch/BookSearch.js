import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from '../../utils/BooksAPI'

import './BookSearch.css'

import BookList from '../BookList'

class BookSearch extends Component {
  state = { 
    books: [],
    myBooks: [],
    isLoading: false
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then(books => this.setState({ 
        myBooks: books,
        isLoading: true
      }))
      .catch(this.setState({ myBooks: [] }))
  }

  onSearch = (event) => {
      const value = event.target.value.trim()
      const { myBooks }  = this.state
      
      if (value && value.length > 2) {
        BooksAPI.search(value)
            .then(books => {
              books.sort(sortBy('title'))
              books.map(book => {
                return myBooks.map(myBook => {
                  if(book.id === myBook.id)
                    book.shelf = myBook.shelf
                  return book
                })
              })

              this.setState({ 
                books: books,
                isLoading: true
               })
            })
            .catch(error => this.setState({ books: []}));
      }

      if ( value.length < 3 ) {
        this.setState({ books: [] })
      }
  }

  onChangeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }


  render() {
    const { books, isLoading } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link 
            to="/" 
            className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" 
              onChange={ event => this.onSearch(event) } 
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
           <BookList 
            isLoading={ isLoading }
            books={ books } 
            onChangeBookShelf={this.onChangeBookShelf} 
          />
        </div>
      </div>
    )
  }
}

export default BookSearch