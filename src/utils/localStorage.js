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
