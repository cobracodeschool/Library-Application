import React, { useState, useEffect } from "react";
import "../App";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../API";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="book-details">

      <div className="book-image">
        <h2>{book.title}</h2>
        <div>
        <img src={book.image_url} alt="#" className="book-list-img" />
        </div>
      </div>

      <div className="book-poster">
        <h2>Authors</h2>
        <p>{book.authors}</p>

        <h2>Description</h2>
        <p>{book.description}</p>

        <h2>Edition</h2>
        <p>{book.edition}</p>

        <h2>Format</h2>
        <p>{book.format}</p>

        <h2>Number of Pages</h2>
        <p>{book.num_pages}</p>

        <h2>Rating</h2>
        <p>{book.rating}</p>

        <h2>Rating_count</h2>
        <p>{book.rating_count}</p>

        <h2>Review_count</h2>
        <p>{book.review_count}</p>

        <h2>Genres</h2>
        <p>{book.genres}</p>

        <h2>Quotes</h2>
        <p>{book.Quote1}</p>
        <p>{book.Quote2}</p>
        <p>{book.Quote3}</p> 
      </div>

    </div>
  );
};

export default BookDetails;
