import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishList } from "../utils/localStorage";

import ReadWishListCard from "./ReadWishListCard";

const WishList = () => {
  const books = useLoaderData();
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storedReadBooks = getWishList();
    if (books.length > 0) {
      const rbook = [];
      for (const bookId of storedReadBooks) {
        const bk = books.find((book) => book.bookId === bookId);
        if (bk) {
          rbook.push(bk);
        }
      }
      setWishList(rbook);
    }
  }, []);
  
  return (
    <div className="mb-8">
      {wishList.map((book) => (
        <ReadWishListCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default WishList;
