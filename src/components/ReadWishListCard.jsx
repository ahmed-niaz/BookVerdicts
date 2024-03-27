import location from "../assets/icons/locations.svg";
import pub from "../assets/icons/publisher.svg";
import pages from "../assets/icons/pages.svg";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ReadWishListCard = ({ book }) => {
  const {
    bookId,
    bookName,
    image,
    author,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
    category,
  } = book;
  return (
    <main>
      <div className="card card-side bg-base-100 shadow-xl p-4 mt-2 mb-8 ">
        <figure className="basis-2/6 bg-[#1313130D] rounded-xl">
          <img className="w-2/5" src={image} alt={image} />
        </figure>
        <div className="card-body">
          <h2 className="text-5xl font-extrabold">{bookName}</h2>
          <h2 className="font-bold my-8">By: {author}</h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center">
                <h2 className="font-extrabold">Tags</h2>
              {tags.map((tag, idx) => (
                <button
                  className="btn  bg-[#23BE0A0D] text-[#76c893] border-none rounded-full  hover:border-[#76c893] hover:scale-105"
                  key={idx}
                >
                  {`#${tag}`}
                </button>
              ))}
            </div>
            <div className="flex">
              <div>
                <img src={location} alt="" />
              </div>
              <div>
                <p>
                  Year of Publishing <span>{yearOfPublishing}</span>
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={pub} alt="" />
              <p>
                Publisher: <span>{publisher}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={pages} alt="" />
              <p>
                Pages <span>{totalPages}</span>
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex gap-6 items-center">
            <button className="btn bg-[#328EFF26] text-[#328EFF] rounded-full border-none">Category:{category}</button>
            <button className="btn bg-[#FFAC3326] text-[#FFAC33] rounded-full border-none">Rating: {rating}</button>
            <Link to={`/book/${bookId}`} className="btn bg-[#76c893] text-white border-none rounded-full">View Details</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
ReadWishListCard.propTypes = {
    book:PropTypes.object,
}
export default ReadWishListCard;
