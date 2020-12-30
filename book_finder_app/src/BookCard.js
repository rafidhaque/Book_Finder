import React, { Component } from "react";
import BookDetails from "./BookDetails";
import { Link } from "react-router-dom";

class BookCard extends Component {
  detailUrl = "/book";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <img src={this.props.image} alt="" />
        <div className="desc">
          <h2>{this.props.title}</h2>
          <h3>{this.props.author}</h3>
          <p>{this.props.published}</p>
          <Link to={this.detailUrl}>see more </Link>
        </div>
      </div>
    );
  }
}

export default BookCard;
