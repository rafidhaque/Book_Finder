import React, { Component } from "react";
import SearchArea from "./SearchArea";
import reqeust from "superagent";
import BookList from "./BookList";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      sort: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
    console.log(this.state);
  };

  searchBook = (e) => {
    e.preventDefault();
    reqeust
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        const cleaned = this.cleanData(data);
        this.setState({ books: cleaned });
      });
  };

  handleSort = (e) => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg",
        };
      }
      return book;
    });
    return cleanedData;
  };

  render() {
    const sortedBooks = this.state.books.sort((a, b) => {
      if (this.state.sort === "Newest First") {
        return parseInt(
          b.volumeInfo.publishedDate.substring(0, 4) -
            a.volumeInfo.publishedDate.substring(0, 4)
        );
      } else if (this.state.sort === "Oldest First") {
        return parseInt(
          a.volumeInfo.publishedDate.substring(0, 4) -
            b.volumeInfo.publishedDate.substring(0, 4)
        );
      } else if (this.state.sort === "A-Z") {
        return parseInt(
          a.volumeInfo.title.substring(0, 1).charCodeAt(0) -
            b.volumeInfo.title.substring(0, 1).charCodeAt(0)
        );
      } else if (this.state.sort === "Z-A") {
        return parseInt(
          b.volumeInfo.title.substring(0, 1).charCodeAt(0) -
            a.volumeInfo.title.substring(0, 1).charCodeAt(0)
        );
      }
    });

    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        <BookList books={sortedBooks} />
      </div>
    );
  }
}

export default Books;
