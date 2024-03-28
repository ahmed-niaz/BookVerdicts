import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadingBooks } from "../utils/localStorage";

import ReadWishListCard from "./ReadWishListCard";


const ReadBooks = () => {
  const books = useLoaderData();
  const [readingBook, setReadingBook] = useState([]);

  useEffect(() => {
    const storedReadBooks = getReadingBooks();
    if (books.length > 0) {
      const rbook = [];
      for (const bookId of storedReadBooks) {
        const bk = books.find((book) => book.bookId === bookId);
        if (bk) {
          rbook.push(bk);
        }
      }
      setReadingBook(rbook);
    }
  }, [books]);

  return (
    <main className="mb-8">
      {readingBook.map((book) => (
        <ReadWishListCard key={book.bookId} book={book} />
        
      ))}
    </main>
  );
};

export default ReadBooks;
