import React from "react";
import reqeust from "superagent";

const BookDetails = ({ match }) => {
  let handle = match.params.handle;
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

  const getBook = () => {
    reqeust
      .get("https://www.googleapis.com/books/v1/volumes/" + handle)
      .then((data) => {
        const cleaned = cleanData(data);
        console.log(cleaned);
      });
  };

  console.log(getBook());
  return (
    <div>
      <h1>getBook</h1>
    </div>
  );
};

export default BookDetails;
