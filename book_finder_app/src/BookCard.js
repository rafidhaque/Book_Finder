import React, { Component } from "react";

class BookCard extends Component {
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
          <input type="submit" value="Details"></input>
        </div>
      </div>
    );
  }
}

export default BookCard;
