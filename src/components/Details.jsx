import { parse } from "postcss";
import { Link, useLoaderData, useParams } from "react-router-dom";

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
  return (
    <main className="mt-10">
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
          <p className="font-bold mb-4">Review: <span className="font-normal">{review}</span></p>
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
            <Link to="" className="btn bg-[#76c893] text-white">
              Sign in
            </Link>
            <Link to="" className="btn bg-[#76c893] text-white">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
