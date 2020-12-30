import React, { Component } from "react";
import SearchArea from "./SearchArea";
import reqeust from "superagent";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
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
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default Books;
