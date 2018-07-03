import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import BookSearch from './components/BookSearch'
import BookShelf from './components/BookShelf'

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <BookShelf />
        )}/>

        <Route exact path='/search' render={()=>(
          <BookSearch />
        )}/>
      </div>
    )
  }
}

export default BooksApp
