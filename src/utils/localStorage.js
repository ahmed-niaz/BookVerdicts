export const getReadingBooks = () => {
  const books = [];
  const storedBook = localStorage.getItem("books");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return books;
};

export const saveReadingBooks = (bookId) => {
  const storedBooks = getReadingBooks();
  const isExists = storedBooks.find((id) => id === bookId);
  if (!isExists) {
    storedBooks.push(bookId);
    localStorage.setItem("books",JSON.stringify(storedBooks));
  }
};




export const isBookInReadingList = (bookId) => {
  const storedBooks = getReadingBooks();
  return storedBooks.find((id) => id === bookId);
};

export const getWishList = () => {
  const wishList = [];
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
    return JSON.parse(storedWishList);
  }
  return wishList;
};
export const saveWishList = (bookId) => {
  const storedWishList = getWishList();
  const isExists = storedWishList.find((id) => id === bookId);
  if (!isExists) {
    storedWishList.push(bookId);
    localStorage.setItem("wishList", JSON.stringify(storedWishList));
  }
};

export const isBookInWishList = (bookId) => {
  const storedWishList = getWishList();
  return storedWishList.find((id) => id === bookId);
};