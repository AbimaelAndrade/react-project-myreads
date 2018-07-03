import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BookShelf.css'

import Shelf from './Shelf'
import BookList from '../BookList'
import * as BooksAPI from '../../utils/BooksAPI'

class BookShelf extends Component {
  state = { 
    bookslist: {
        currentlyReading: [],
        wantToRead: [],
        read: []
    },
    isLoadingCurrentlyReading: false,
    isLoadingWantToRead: false,
    isLoadingRead: false,
  }
  
  componentDidMount() {
    this.updatebookShelf()
  }

  updatebookShelf= () => {
    BooksAPI.getAll().then(books =>
      this.setState({
        bookslist: {
            currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
            wantToRead: books.filter(book => book.shelf === 'wantToRead'),
            read: books.filter(book => book.shelf === 'read')
        },
        isLoadingCurrentlyReading: true,
        isLoadingWantToRead: true,
        isLoadingRead: true,
    }))
  }

  onChangeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(res => this.updatebookShelf())
  }

  render() {
    const { isLoadingCurrentlyReading, isLoadingWantToRead, isLoadingRead } = this.state
    const { currentlyReading, wantToRead, read } = this.state.bookslist

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading">
              <BookList 
                isLoading={isLoadingCurrentlyReading}
                books={currentlyReading} 
                onChangeBookShelf={this.onChangeBookShelf}/>
          </Shelf>  
          <Shelf title="Want to Read">
              <BookList 
                isLoading={isLoadingWantToRead}
                books={wantToRead}
                onChangeBookShelf={this.onChangeBookShelf}/>
          </Shelf>  
          <Shelf title="Read">
              <BookList 
                isLoading={isLoadingRead}
                books={read}
                onChangeBookShelf={this.onChangeBookShelf}/>
          </Shelf>  
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link> 
        </div>
      </div>
    )
  }
}

export default BookShelf