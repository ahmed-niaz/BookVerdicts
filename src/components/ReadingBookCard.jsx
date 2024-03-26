const ReadingBookCard = ({ book }) => {
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
    <main>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={image}
          />
        </figure>
        <div className="card-body">
        <h2 className="text-5xl font-extrabold">{bookName}</h2>
          <h2 className="font-bold my-8">By: {author}</h2>
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
          <div>
            
          </div>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReadingBookCard;
