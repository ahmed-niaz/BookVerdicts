import PropTypes from "prop-types";
import icon from "../assets/icons/rating.svg";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  console.log(book);
  const { image, author, bookName, tags, category, rating, bookId } = book;
  return (
    <main>
      <Link to={`/book/${bookId}`} className="card w-full bg-base-100 shadow-xl p-4">
        <figure className="bg-[#F3F3F3] rounded-xl p-16">
          <img src={image} alt={image} />
        </figure>
        <div className="card-body">
          <div className="flex gap-2 ">
            {tags.map((tag, idx) => (
              <button
                className="btn rounded-full bg-[#23BE0A0D] border-none text-[#76c893] hover:border-[#76c893] hover:scale-105"
                key={idx}
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title font-extrabold">{bookName}</h2>
          <p className="font-bold">By: <span className="font-normal">{author}</span></p>
          <div className="divider"></div>
          <div className="flex justify-between">
            <p>{category}</p>
            <div className="flex gap-2">
              {rating}{" "}
              <span>
                <img src={icon} alt="" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};
export default BookCard;
