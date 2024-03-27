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
      <div className="w-11/12 mx-auto lg:w-full">
      <Banner />
      </div>
      <h2 className="text-center text-3xl font-extrabold my-8">Books</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 w-11/12 mx-auto lg:w-full">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Home;
