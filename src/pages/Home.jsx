import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`books.json`)
      .then((resp) => resp.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <main>
      <Banner />
      <h2 className="text-center text-3xl font-extrabold my-8">Books</h2>
      <div className="grid grid-cols-3 gap-4 my-10">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Home;
