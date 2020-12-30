import React, { Component } from "react";

const BookDetails = ({ match }) => {
  console.log(match.params.handle);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default BookDetails;
