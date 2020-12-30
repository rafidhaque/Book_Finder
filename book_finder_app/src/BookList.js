import React, { Component } from "react";
import BookCard from "./BookCard";

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        {this.props.books.map((book, i) => {
          return (
            <BookCard
              key={i}
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}
            />
          );
        })}
      </div>
    );
  }
}

export default BookList;
