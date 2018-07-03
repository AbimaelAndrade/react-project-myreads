import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Book.css'

import CoverDefault from './assets/default_cover.jpg'
import { options } from '../../utils/SelectOptions'
import SelectOption from '../../ui/SelectOption'

class Book extends Component {

  constructor(props) {
    super(props);
    this.book = props.book
    this.onChangeBookShelf = props.onChangeBookShelf;
  }

  onChangeBook(event){
    this.onChangeBookShelf(this.book, event.target.value)
  }

  normalizeAuthors(){
    if (this.book.authors === undefined)
      return 'Unknown author'
    else
      return this.book.authors.join(', ')
  }

  normalizeImageLinks() {
    if (this.book.imageLinks === undefined )
      return CoverDefault
    else
       return this.book.imageLinks.thumbnail
  }

  render() {
    const authors = this.normalizeAuthors()
    const thumbnail = this.normalizeImageLinks()

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <SelectOption
              options={ options }
              selected={ this.book.shelf }
              onChange={e => this.onChangeBook(e) }
            />
          </div>
        </div>
        <div className="book-title">{ this.book.title }</div>
        <div className="book-authors">{ authors }</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object,
}

export default Book