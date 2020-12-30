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
        this.setState({ books: [...data.body.items] });
      });
  };

  handleSort = (e) => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
