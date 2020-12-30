import React, { useEffect, useState } from "react";
import reqeust from "superagent";

const BookDetails = ({ match }) => {
  let handle = match.params.handle;
  const [book, setBook] = useState({});

  console.log(handle);

  const cleanData = (data) => {
    if (data.body.volumeInfo.hasOwnProperty("publishedDate") === false) {
      data.body.volumeInfo["publishedDate"] = "0000";
    } else if (data.body.volumeInfo.hasOwnProperty("imageLinks") === false) {
      data.body.volumeInfo["imageLinks"] = {
        thumbnail:
          "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg",
      };
    }
    return data;
  };

  const getBook = (setBooker) => {
    reqeust
      .get("https://www.googleapis.com/books/v1/volumes/" + handle)
      .then((data) => {
        let cleaned = cleanData(data);
        setBook(cleaned);
      });
  };

  // const image = book.body.volumeInfo.image.thumbnail;
  // const title = "bla";
  // const author = "bla";
  // const published = "bla";

  useEffect(() => {
    getBook(setBook);
  }, []);

  let book_title = book.body.volumeInfo.title;

  return (
    <div className="card-container">
      <h1>{book_title}</h1>
    </div>
  );
};

export default BookDetails;
