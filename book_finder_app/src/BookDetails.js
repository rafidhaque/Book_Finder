import React, { useEffect, useState } from "react";
import reqeust from "superagent";
import Header from "./Header";
import { getBook } from "./Api";

const BookDetails = ({ match }) => {
  let handle = match.params.handle;
  const [book, setBook] = useState({});

  useEffect(async () => {
    await getBook(handle, setBook);
  }, []);

  const cleanData = (data) => {
    if (data.hasOwnProperty("publishedDate") === false) {
      data["publishedDate"] = "0000";
    }
    if (data.imageLinks == undefined) {
      data["imageLinks"] = {
        thumbnail:
          "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg",
      };
    }
    return data;
  };

  console.log(book);

  // let book_title = book.title;
  // let book_author = book.authors;
  // let book_image = book.imageLinks.thumbnail;
  // let book_publish_date = book.publishedDate;

  return (
    <div>
      <Header />
      <div className="book-details">
        <h1>{book.title}</h1>
        <h3>{book.subtitle}</h3>
        {book.imageLinks == undefined ? (
          <img
            src="https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg"
            style={{ height: "500px", marginRight: "200px" }}
          />
        ) : (
          <img
            src={book.imageLinks.thumbnail}
            style={{ height: "500px", marginRight: "200px" }}
          />
        )}
        <h2>Written by: {book.authors}</h2>
        <h4 style={{ margin: "20px" }}>publishedDate: {book.publishedDate}</h4>
        <h3 style={{ margin: "20px" }}>publisher: {book.publisher}</h3>
        <p>
          Description: <br /> {book.description}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
