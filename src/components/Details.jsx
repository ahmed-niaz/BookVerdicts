import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { isBookInReadingList, isBookInWishList, saveReadingBooks, saveWishList } from "../utils/localStorage";

const Details = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);
  console.log(books);
  console.log(book);
  const {
    bookName,
    image,
    author,
    review,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
    category,
  } = book;

  const handleReadBook = () => {
    if (isBookInReadingList(idInt)) {
      toast.error(`Book is already in the reading list`);
    } else {
      saveReadingBooks(idInt);
      toast.success(`Book added to the reading list`);
    }
  };

  const handleWishList = () => {
    if (isBookInReadingList(idInt)) {
      toast.warning(`This book is already in the reading list. You cannot add it to the wishlist.`);
    } else if (isBookInWishList(idInt)) {
      toast.error(`Book is already in the wishlist`);
    } else {
      saveWishList(idInt);
      toast.success(`Book added to the wishlist`);
    }
  };
  return (
    <main className="mt-10 mb-4">
      <div className="flex gap-12">
        <div className="basis-1/2 bg-[#F3F3F3] flex items-center justify-center rounded-xl">
          <img className="w-3/4 opacity-90 p-20" src={image} alt="" />
        </div>
        <div>
          <h2 className="text-5xl font-extrabold">{bookName}</h2>
          <h2 className="font-bold my-8">By: {author}</h2>
          <div className="divider"></div>
          <p className="font-bold">{category}</p>
          <div className="divider"></div>
          <p className="font-bold mb-4">
            Review: <span className="font-normal">{review}</span>
          </p>
          <div className="flex gap-2 ">
            {tags.map((tag, idx) => (
              <button
                className="btn border-2 border-[#76c893] hover:border-[#76c893] hover:scale-105"
                key={idx}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <div className="my-4">
            <div className="grid grid-cols-2">
              <p>Number of Pages: </p>
              <p className="font-bold">{totalPages}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Publisher</p>
              <p className="font-bold">{publisher}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Year of Publishing</p>
              <p className="font-bold">{yearOfPublishing}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Rating</p>
              <p className="font-bold">{rating}</p>
            </div>
          </div>
          <div>
            <Link
              onClick={handleReadBook}
              className="btn bg-[#76c893] text-white"
            >
              Read
            </Link>
            <Link
              Link
              onClick={handleWishList}
              className="btn bg-[#76c893] text-white"
            >
              WishList
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Details;
