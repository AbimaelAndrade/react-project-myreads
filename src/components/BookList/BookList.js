import React, { Component} from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import { withLoading } from '../../hocs/withLoading';

import './BookList.css'
import Book from '../Book'

class BookList extends Component {

    render(){
      const { books, onChangeBookShelf } = this.props
      books.sort(sortBy('title')) 

      return (
        <ol className="books-grid">
            {
                books.map(book => {
                    return (
                        <li key={book.id}>
                            <Book 
                                book={book}
                                onChangeBookShelf={ onChangeBookShelf } 
                            />
                        </li>
                    )
                })
            }
        </ol>
      )
    }
}

BookList.propTypes = {
    books: PropTypes.array.isRequired
};

export default withLoading(BookList)