import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  Adventure: [
    { name: "Life of Pi", author: "Yann Martel", rating: "4/5" },
    {
      name: "The Three Musketeers",
      author: "Alexandre Dumas",
      rating: "3.5/5"
    },
    { name: "Heart of Darkness", author: "Joseph Conrad", rating: "3.8/5" }
  ],
  Fiction: [
    { name: "The Lord of The Rings", author: "J.R.R. Tolkien", rating: "5/5" },
    {
      name: "A Game of Thrones",
      author: "George R.R. Martin",
      rating: "4.5/5"
    },
    { name: "The Last Thing He Told Me", author: "Laura Dave", rating: "3.5/5" }
  ],
  Detective: [
    { name: "Sherlock Holmes", author: "Arthur Conan Doyle", rating: "3.5/5" },
    { name: "And There Were None", author: "Agatha Christie", rating: "5/5" },
    { name: "The Moving Toyshop", author: "Edmund Crispin", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Fiction");
  function genreSelect(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 📚 Recommended Books </h1>
      <p className="small-text">
        Checkout my favorite books. Select a genre to get started
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreSelect(genre)} className="btn">
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ul className="book-list">
          {bookDB[selectedGenre].map((book) => (
            <li key={book.name}>
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}>by {book.author} </div>
              <div style={{ fontSize: "smaller" }}>Rating: {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
