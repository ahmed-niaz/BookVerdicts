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
      <div className="flex gap-12 flex-col lg:flex-row w-11/12 mx-auto lg:w-full">
        <div className="basis-1/2 bg-[#F3F3F3] flex items-center justify-center rounded-xl">
          <img className="w-3/4 opacity-90 p-20" src={image} alt="" />
        </div>
        <div>
          <h2 className="text-2xl lg:text-5xl font-extrabold text-center lg:text-start">{bookName}</h2>
          <h2 className="font-bold my-2 lg:my-8 text-center lg:text-start">By: {author}</h2>
          <div className="divider hidden lg:block"></div>
          <p className="font-bold text-center lg:text-start">{category}</p>
          <div className="divider hidden lg:block"></div>
          <p className="font-bold mb-4">
            Review: <span className="font-normal">{review}</span>
          </p>
          <div className="flex gap-2 ">
          <p className="flex items-center font-bold"> Tags</p>
            {tags.map((tag, idx) => (
              
              <button
                className="btn  bg-[#23BE0A0D] text-[#76c893] border-none rounded-full hover:scale-105"
                key={idx}
              >
                {`#${tag}`}
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
          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              onClick={handleReadBook}
              className="btn bg-[#76c893]  text-white  hover:border-[#76c893] hover:scale-105 w-4/12 lg:w-2/12"
            >
              Read
            </Link>
            <Link
              Link
              onClick={handleWishList}
              className="btn  bg-[#76c893]  text-white hover:border-[#76c893] hover:scale-105 w-4/12 lg:w-2/12"
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
