import React from 'react'
import * as BooksAPI from '../util/BooksAPI'

import Search from './Search'
import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  searchBooks = (query, maxResult = 20) => {
    BooksAPI.search(query, maxResult).then(booksFound => {
      booksFound.error
    })
  }

  render() {
    return (
      <div className="app">
        {!this.state.books ? (
          <Search searchBooks={this.searchBooks} />
        ) : (
          <BookShelf books={this.state.books} />
        )}
      </div>
    )
  }
}

export default BooksApp
